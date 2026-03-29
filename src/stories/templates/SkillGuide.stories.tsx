import type { Meta, StoryObj } from '@storybook/react';
import skillMd from '../../../SKILL.md?raw';

// ── 토큰 ────────────────────────────────────────────────────────────────────
const C = {
  bg:       'var(--color-neutral-background-default)',
  sidebar:  'var(--color-neutral-background-separated-1)',
  border:   'var(--color-neutral-stroke-divider)',
  divider:  'var(--color-neutral-stroke-divider)',
  text:     'var(--color-neutral-foreground-default)',
  sub:      'var(--color-neutral-foreground-subtle-1)',
  muted:    'var(--color-neutral-foreground-subtle-3)',
  primary:  'var(--color-neutral-foreground-default)',
  codeBg:   'var(--color-neutral-background-separated-1)',
  codeText: 'var(--color-neutral-foreground-default)',
  inlineBg: 'var(--color-neutral-background-separated-1)',
};

// ── 마크다운 렌더러 ──────────────────────────────────────────────────────────

type Token =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'hr' }
  | { type: 'blank' }
  | { type: 'table'; rows: string[][] }
  | { type: 'code'; lang: string; body: string }
  | { type: 'list'; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'p'; text: string };

function tokenize(md: string): Token[] {
  const lines = md.split('\n');
  const tokens: Token[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // fenced code block
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const body: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        body.push(lines[i]);
        i++;
      }
      tokens.push({ type: 'code', lang, body: body.join('\n') });
      i++;
      continue;
    }

    // h2
    if (line.startsWith('## ')) {
      tokens.push({ type: 'h2', text: line.slice(3) });
      i++;
      continue;
    }

    // h3
    if (line.startsWith('### ')) {
      tokens.push({ type: 'h3', text: line.slice(4) });
      i++;
      continue;
    }

    // hr
    if (/^---+$/.test(line.trim())) {
      tokens.push({ type: 'hr' });
      i++;
      continue;
    }

    // table (starts with |)
    if (line.startsWith('|')) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        const row = lines[i]
          .split('|')
          .slice(1, -1)
          .map(c => c.trim());
        // skip separator rows (---|---)
        if (!row.every(c => /^[-:\s]+$/.test(c))) {
          rows.push(row);
        }
        i++;
      }
      if (rows.length > 0) tokens.push({ type: 'table', rows });
      continue;
    }

    // list item
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(lines[i].slice(2));
        i++;
      }
      tokens.push({ type: 'list', items });
      continue;
    }

    // blockquote
    if (line.startsWith('> ')) {
      tokens.push({ type: 'blockquote', text: line.slice(2) });
      i++;
      continue;
    }

    // blank
    if (line.trim() === '') {
      tokens.push({ type: 'blank' });
      i++;
      continue;
    }

    // paragraph
    tokens.push({ type: 'p', text: line });
    i++;
  }

  return tokens;
}

/** inline 마크다운 (bold, inline-code, link) → React 노드 */
function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // match **bold**, `code`, escaped \`
  const re = /\*\*(.+?)\*\*|`([^`]+)`/g;
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      parts.push(<strong key={m.index} style={{ fontWeight: 700, color: C.text }}>{m[1]}</strong>);
    } else if (m[2] !== undefined) {
      parts.push(
        <code key={m.index} style={{
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          fontSize: '0.88em',
          background: C.inlineBg,
          color: C.primary,
          borderRadius: 4,
          padding: '1px 5px',
        }}>{m[2]}</code>
      );
    }
    last = m.index + m[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function renderToken(token: Token, idx: number): React.ReactNode {
  switch (token.type) {
    case 'h2':
      return (
        <h2 key={idx} style={{
          fontSize: 22, fontWeight: 800, color: C.text,
          margin: '40px 0 12px', letterSpacing: '-0.5px',
          paddingBottom: 10, borderBottom: `2px solid ${C.primary}`,
          display: 'inline-block',
        }}>
          {renderInline(token.text)}
        </h2>
      );

    case 'h3':
      return (
        <h3 key={idx} style={{
          fontSize: 14, fontWeight: 700, color: C.sub,
          margin: '24px 0 8px', letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}>
          {renderInline(token.text)}
        </h3>
      );

    case 'hr':
      return <hr key={idx} style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '32px 0' }} />;

    case 'blank':
      return null;

    case 'code':
      return (
        <div key={idx} style={{
          background: C.codeBg,
          borderRadius: 10,
          padding: '4px 0',
          margin: '12px 0',
          overflow: 'hidden',
          border: `1px solid ${C.border}`,
        }}>
          {token.lang && (
            <div style={{
              padding: '6px 16px',
              borderBottom: `1px solid ${C.border}`,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: C.muted,
              }}>{token.lang}</span>
            </div>
          )}
          <pre style={{
            margin: 0, padding: '14px 18px',
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
            fontSize: 12.5, lineHeight: 1.7, color: C.codeText,
            overflowX: 'auto', whiteSpace: 'pre',
          }}>
            <code>{token.body}</code>
          </pre>
        </div>
      );

    case 'table': {
      const [head, ...body] = token.rows;
      return (
        <div key={idx} style={{ overflowX: 'auto', margin: '12px 0' }}>
          <table style={{
            borderCollapse: 'collapse',
            width: '100%',
            fontSize: 13,
            fontFamily: "'Pretendard', sans-serif",
          }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${C.border}` }}>
                {head?.map((cell, ci) => (
                  <th key={ci} style={{
                    padding: '8px 16px 8px 0',
                    textAlign: 'left', fontWeight: 700,
                    color: C.sub, whiteSpace: 'nowrap',
                  }}>
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} style={{ borderBottom: `1px solid ${C.divider}` }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{
                      padding: '10px 16px 10px 0',
                      color: C.text, lineHeight: 1.5,
                      fontWeight: ci === 0 ? 600 : 400,
                      verticalAlign: 'top',
                    }}>
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case 'list':
      return (
        <ul key={idx} style={{ margin: '8px 0', paddingLeft: 20 }}>
          {token.items.map((item, ii) => (
            <li key={ii} style={{
              color: C.sub, fontSize: 13.5, lineHeight: 1.7,
              marginBottom: 4,
            }}>
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );

    case 'blockquote':
      return (
        <blockquote key={idx} style={{
          borderLeft: `3px solid ${C.primary}`,
          margin: '12px 0', padding: '8px 16px',
          background: C.inlineBg, borderRadius: '0 8px 8px 0',
          color: C.sub, fontSize: 13.5, lineHeight: 1.6,
        }}>
          {renderInline(token.text)}
        </blockquote>
      );

    case 'p':
      return (
        <p key={idx} style={{
          color: C.sub, fontSize: 13.5, lineHeight: 1.7,
          margin: '6px 0',
        }}>
          {renderInline(token.text)}
        </p>
      );

    default:
      return null;
  }
}

// ── TOC (목차) 추출 ──────────────────────────────────────────────────────────
function extractToc(tokens: Token[]) {
  return tokens
    .filter((t): t is Extract<Token, { type: 'h2' }> => t.type === 'h2')
    .map(t => t.text);
}

// ── 컴포넌트 ─────────────────────────────────────────────────────────────────
function SkillGuidePage() {
  const tokens = tokenize(skillMd);
  const toc = extractToc(tokens);

  // h2 섹션별로 그룹핑
  type Section = { title: string; tokens: Token[] };
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const token of tokens) {
    if (token.type === 'h2') {
      if (current) sections.push(current);
      current = { title: token.text, tokens: [] };
    } else if (current) {
      current.tokens.push(token);
    }
  }
  if (current) sections.push(current);

  return (
    <div style={{
      fontFamily: "'Pretendard', -apple-system, sans-serif",
      display: 'flex',
      minHeight: '100vh',
      background: C.bg,
      width: '100%',
      boxSizing: 'border-box',
    }}>

      {/* 사이드바 TOC */}
      <aside style={{
        width: 220,
        flexShrink: 0,
        background: C.sidebar,
        borderRight: `1px solid ${C.border}`,
        padding: '40px 0',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
        boxSizing: 'border-box',
      }}>
        <div style={{ padding: '0 20px 20px' }}>
          <p style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: C.muted, margin: '0 0 12px',
          }}>
            SKILL.md
          </p>
        </div>
        <nav>
          {toc.map((title, i) => (
            <a
              key={i}
              href={`#section-${i}`}
              style={{
                display: 'block',
                padding: '7px 20px',
                fontSize: 13, color: C.sub, fontWeight: 500,
                textDecoration: 'none',
                borderLeft: '2px solid transparent',
                lineHeight: 1.4,
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = C.primary;
                (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = C.primary;
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-primary-background-subtle-1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = C.sub;
                (e.currentTarget as HTMLAnchorElement).style.borderLeftColor = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              }}
            >
              {title.replace(/^\d+\.\s*/, '')}
            </a>
          ))}
        </nav>
      </aside>

      {/* 본문 */}
      <main style={{
        flex: 1,
        padding: '40px 56px 80px',
        maxWidth: 860,
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}>

        {/* 상단 헤더 */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          marginBottom: 40, paddingBottom: 24,
          borderBottom: `1px solid ${C.border}`,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'linear-gradient(135deg, var(--color-neutral-foreground-default), var(--color-neutral-foreground-subtle-1))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 5h12M4 10h8M4 15h10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: C.text, margin: 0, letterSpacing: '-0.4px' }}>
              SKILL.md
            </h1>
            <p style={{ fontSize: 12, color: C.muted, margin: '2px 0 0' }}>
              MDS 공통 원칙 & AI 생성 기준
            </p>
          </div>
        </div>

        {/* 섹션 렌더링 */}
        {sections.map((section, si) => (
          <section key={si} id={`section-${si}`} style={{ marginBottom: 48 }}>
            <h2 style={{
              fontSize: 22, fontWeight: 800, color: C.text,
              margin: '0 0 16px', letterSpacing: '-0.5px',
              paddingBottom: 10,
              borderBottom: `2px solid ${C.primary}`,
              display: 'inline-block',
            }}>
              {renderInline(section.title)}
            </h2>
            {section.tokens.map((token, ti) => renderToken(token, ti))}
          </section>
        ))}
      </main>
    </div>
  );
}

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<typeof SkillGuidePage> = {
  title: 'Templates/SKILL Guide',
  component: SkillGuidePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'SKILL.md 파일을 그대로 렌더링합니다. 파일이 수정되면 자동으로 최신 내용이 반영됩니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkillGuidePage>;

export const Default: Story = {
  name: 'SKILL Guide',
};
