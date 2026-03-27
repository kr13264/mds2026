import type { Meta, StoryObj } from '@storybook/react';

// ── Icons ──────────────────────────────────────────────────────────────────
// 일관된 사용자 경험 — Material Symbols "apps"
const IconConsistency = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#1A6FE8', userSelect: 'none' }}>
    apps
  </span>
);
// 효율적인 업무 프로세스 — Material Symbols "hub"
const IconProcess = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#1A6FE8', userSelect: 'none' }}>
    partner_exchange
  </span>
);
// 생산성 극대화 — Material Symbols "recycling"
const IconProductivity = () => (
  <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#1A6FE8', userSelect: 'none' }}>
    recycling
  </span>
);

// ── 데이터 ─────────────────────────────────────────────────────────────────
const scopeItems = [
  {
    name: 'Foundations (BON UI)',
    desc: [
      '디자인 시스템의 시각적 기반을 구성하는 핵심 요소의 집합입니다.',
      'Color, Typography 등 모든 Component와 Module에 공통으로 적용되는 디자인 원칙과 토큰을 정의합니다.',
    ],
    disabled: false,
  },
  {
    name: 'Layout',
    desc: [
      '화면을 구성하는 공간적 구조와 배치 규칙을 정의하는 체계입니다.',
      'Grid, Breakpoint, Container 등 콘텐츠가 화면 내에서 정렬되고 반응하는 방식에 대한 기준을 제공합니다.',
    ],
    disabled: false,
  },
  {
    name: 'Components',
    desc: [
      '시스템과 상호 작용하는 가장 작은 단위의 구성요소입니다.',
      '임의 편집이 불가하며, 규정된 가이드라인을 준수하여 활용합니다.',
    ],
    disabled: false,
  },
  {
    name: 'Modules',
    desc: [
      '하나 이상의 Component가 조합되어 특정 기능 또는 콘텐츠 영역을 구성하는 단위입니다.',
      '서비스의 맥락에 따라 Component를 조합하여 구성되며, 구성 방식은 가이드라인 내 허용 범위를 준수합니다.',
    ],
    disabled: true,
  },
];

const usageItems = [
  {
    name: '디자인',
    items: [
      '네이버 메인에서 공통으로 활용 가능한 컴포넌트를 MDS에 정의합니다.',
      '신규 서비스 디자인 진행 시 반드시 정의된 컴포넌트를 사용하고, 원하는 컴포넌트가 없는 경우에만 신규로 디자인합니다.',
      '신규 디자인 중 공통화 가능한 컴포넌트는 MDS에 추가하고 재사용합니다.',
    ],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────
const HomePage = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    color: '#111122',
    background: '#FFFFFF',
    padding: '40px',
    minHeight: '100vh',
    boxSizing: 'border-box',
  }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
          Main Design System
        </h1>
        <p style={{ fontSize: '13px', color: '#9999B8', margin: 0 }}>
          NAVER UX · last updated Mar 20, 2026
        </p>
      </div>

      {/* ── Info Banner ── */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: 10,
        padding: '14px 18px', borderRadius: 8,
        background: '#EBF2FF', border: '1px solid #C7D8FD',
        marginBottom: '40px',
        fontSize: 14, color: '#2255BB', lineHeight: 1.6,
      }}>
        <span>MDS는 일관되고 효율적인 네이버앱과 메인 서비스 경험을 만들기 위한 통합 디자인 시스템입니다.</span>
      </div>

      {/* ── 3 Value Cards ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 0,
        border: '1px solid #E4E4EE',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: '48px',
      }}>
        {[
          { icon: <IconConsistency />, title: '일관된 사용자 경험 제공', desc: '명확한 사용 기준과 UX 가이드라인' },
          { icon: <IconProcess />,     title: '효율적인 업무 프로세스 구축', desc: '체계적인 관리 및 운영으로' },
          { icon: <IconProductivity />, title: '생산성 극대화', desc: 'AI 기반 도구 활용으로' },
        ].map((card, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'space-between',
            padding: '40px 24px 32px',
            borderRight: i < 2 ? '1px solid #E4E4EE' : 'none',
            textAlign: 'center', gap: 24,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 72 }}>
              {card.icon}
            </div>
            <div>
              <p style={{ fontSize: 13, color: '#9999B8', margin: '0 0 4px', lineHeight: 1.5 }}>{card.desc}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#111122', margin: 0, lineHeight: 1.4 }}>{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── 범위 ── */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111122', margin: '0 0 16px', letterSpacing: '-0.3px' }}>범위</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 13, border: '1px solid #E4E4EE', borderRadius: 8, overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: '#F7F7F9' }}>
                <th style={{ padding: '10px 20px', textAlign: 'center', fontWeight: 700, color: '#111122', borderBottom: '1px solid #E4E4EE', whiteSpace: 'nowrap', width: '160px' }}>Category</th>
                <th style={{ padding: '10px 20px', textAlign: 'center', fontWeight: 700, color: '#111122', borderBottom: '1px solid #E4E4EE' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {scopeItems.map((item) => (
                <tr key={item.name} style={{ borderBottom: '1px solid #E4E4EE' }}>
                  <td style={{ padding: '14px 20px', fontFamily: 'monospace', fontSize: 12, color: item.disabled ? '#BBBBCC' : '#111122', verticalAlign: 'top', whiteSpace: 'nowrap', borderRight: '1px solid #E4E4EE' }}>{item.name}</td>
                  <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                    {item.desc.map((d, i) => (
                      <p key={i} style={{ margin: i === 0 ? '0 0 4px' : 0, fontSize: 13, color: item.disabled ? '#BBBBCC' : (i === 0 ? '#111122' : '#55557A'), lineHeight: 1.6 }}>{d}</p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 활용 ── */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111122', margin: '0 0 16px', letterSpacing: '-0.3px' }}>활용</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 13, border: '1px solid #E4E4EE', borderRadius: 8, overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: '#F7F7F9' }}>
                <th style={{ padding: '10px 20px', textAlign: 'center', fontWeight: 700, color: '#111122', borderBottom: '1px solid #E4E4EE', whiteSpace: 'nowrap', width: '120px' }}>Category</th>
                <th style={{ padding: '10px 20px', textAlign: 'center', fontWeight: 700, color: '#111122', borderBottom: '1px solid #E4E4EE' }}>Guidelines</th>
              </tr>
            </thead>
            <tbody>
              {usageItems.map((section) => (
                <tr key={section.name} style={{ borderBottom: '1px solid #E4E4EE' }}>
                  <td style={{ padding: '14px 20px', fontFamily: 'monospace', fontSize: 12, color: '#111122', verticalAlign: 'top', whiteSpace: 'nowrap', borderRight: '1px solid #E4E4EE' }}>{section.name}</td>
                  <td style={{ padding: '14px 20px', verticalAlign: 'top' }}>
                    {section.items.map((d, i) => (
                      <p key={i} style={{ margin: i < section.items.length - 1 ? '0 0 6px' : 0, fontSize: 13, color: '#55557A', lineHeight: 1.6 }}>• {d}</p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 시스템 구성 ── */}
      <div style={{ marginBottom: '48px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#9999B8', margin: '0 0 16px' }}>System</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E4E4EE' }}>
                {['Section', 'Description', 'Status'].map(h => (
                  <th key={h} style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontWeight: 700, color: '#55557A', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { title: 'Foundation', desc: 'BON UI 컬러 토큰, 레이아웃 그리드, 타이포그래피, 그라디언트 등 디자인의 기반 요소를 정의합니다.', status: 'Live' },
                { title: 'Icon',       desc: '서비스 전반에서 사용하는 아이콘 세트입니다.', status: 'Coming Soon' },
                { title: 'Components', desc: 'Badge, Button, Chip, Divider, Image, Profile 등 재사용 가능한 UI 컴포넌트를 제공합니다.', status: 'Live' },
                { title: 'Templates',  desc: '자주 사용되는 레이아웃 패턴 및 페이지 템플릿을 제공합니다.', status: 'Coming Soon' },
              ].map(s => {
                const sc = s.status === 'Live' ? { color: '#03A94D', bg: '#E6F9EE' } : { color: '#9999B8', bg: '#F0F0F4' };
                return (
                  <tr key={s.title} style={{ borderBottom: '1px solid #F0F0F8' }}>
                    <td style={{ padding: '12px 16px 12px 0', fontWeight: 700, color: '#111122', whiteSpace: 'nowrap', verticalAlign: 'top' }}>{s.title}</td>
                    <td style={{ padding: '12px 16px 12px 0', color: '#55557A', lineHeight: 1.6, verticalAlign: 'top' }}>{s.desc}</td>
                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                      <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontWeight: 700, background: sc.bg, color: sc.color }}>{s.status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Components ── */}
      <div style={{ marginBottom: '48px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#9999B8', margin: '0 0 16px' }}>Components</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            { name: 'Badge', status: 'Live' }, { name: 'Button', status: 'Live' },
            { name: 'Chip', status: 'Live' },  { name: 'Divider', status: 'Live' },
            { name: 'Image', status: 'Live' }, { name: 'Profile', status: 'Live' },
            { name: 'Input', status: 'Coming Soon' }, { name: 'Select', status: 'Coming Soon' },
            { name: 'Modal', status: 'Coming Soon' }, { name: 'Toast', status: 'Coming Soon' },
            { name: 'Tab', status: 'Coming Soon' },   { name: 'Toggle', status: 'Coming Soon' },
          ].map(c => {
            const sc = c.status === 'Live' ? { color: '#03A94D', bg: '#E6F9EE' } : { color: '#9999B8', bg: '#F0F0F4' };
            return (
              <div key={c.name} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 14px', borderRadius: 8,
                border: '1px solid #E4E4EE', background: '#FFFFFF',
              }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#111122' }}>{c.name}</span>
                <span style={{ padding: '1px 6px', borderRadius: 3, fontSize: 10, fontWeight: 700, background: sc.bg, color: sc.color }}>{c.status}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{ paddingTop: 24, borderTop: '1px solid #E4E4EE', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 12, color: '#9999B8' }}>MDS Design System · NAVER UX · 2025</span>
        <span style={{ fontSize: 12, color: '#9999B8' }}>Storybook 8 · React 18 · Tailwind CSS v3</span>
      </div>

    </div>
  </div>
);

const meta: Meta<typeof HomePage> = {
  title: 'Home',
  component: HomePage,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
