import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon } from '@/components/Buttons';
import type { ButtonIconVariant, ButtonIconSize, ButtonIconColor, ButtonIconShape } from '@/components/Buttons';

// ── 샘플 아이콘 ────────────────────────────────────────────────────────────
const IcPlus = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" width="100%" height="100%">
    <path d="M10 4v12M4 10h12" />
  </svg>
);
const IcEdit = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M14.5 3.5a2.121 2.121 0 0 1 3 3L6 18H3v-3L14.5 3.5z" />
  </svg>
);
const IcDownload = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M10 3v10M6 9l4 4 4-4M3 15v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1" />
  </svg>
);
const IcSearch = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <circle cx="9" cy="9" r="5.5" />
    <path d="M13 13l3.5 3.5" />
  </svg>
);

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 8 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
      textTransform: 'uppercase', color: '#9999B8', margin: '0 0 4px',
    }}>{label}</p>
    {desc && <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: '#55557A', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof ButtonIcon> = {
  title: 'Components/Buttons/Icon',
  component: ButtonIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
단일 아이콘만 표시하는 버튼입니다.
레이블 없이 다운로드·공유·편집 등 단일 기능을 수행할 때 사용합니다.
**square**(사각)와 **round**(원형) 두 가지 형태를 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | Height | Icon |
|------|--------|------|
| \`sm\`  | 36px | 16px |
| \`md\`  | 40px | 20px |
| \`lg\`  | 44px | 20px |
| \`xl\`  | 48px | 20px |
| \`2xl\` | 52px | 20px |

### Shape

| Shape | Description |
|-------|-------------|
| \`square\` | 사각형 (기본) — 일반 레이아웃에 사용 |
| \`round\`  | 원형 — FAB, 플로팅 버튼에 사용 |

\`\`\`tsx
import { ButtonIcon } from '@/components/Buttons';

<ButtonIcon icon={<IcEdit />} variant="solid" size="md" />
<ButtonIcon icon={<IcPlus />} variant="solid" shape="round" fab />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['plain', 'outlined', 'tonal', 'solid'] satisfies ButtonIconVariant[],
      description: '강조 수준 스타일',
      table: { type: { summary: 'ButtonIconVariant' }, defaultValue: { summary: 'solid' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'] satisfies ButtonIconSize[],
      description: '높이 기준 사이즈',
      table: { type: { summary: 'ButtonIconSize' }, defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'neutral'] satisfies ButtonIconColor[],
      description: '색상 테마',
      table: { type: { summary: 'ButtonIconColor' }, defaultValue: { summary: 'primary' } },
    },
    shape: {
      control: 'select',
      options: ['square', 'round'] satisfies ButtonIconShape[],
      description: '버튼 형태',
      table: { type: { summary: 'ButtonIconShape' }, defaultValue: { summary: 'square' } },
    },
    loading: { control: 'boolean', description: '로딩 스피너 표시', table: { defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', description: '비활성 상태', table: { defaultValue: { summary: 'false' } } },
    fab: { control: 'boolean', description: 'FAB — 독립 노출 시 shadow 적용', table: { defaultValue: { summary: 'false' } } },
    icon: { control: false, description: '아이콘 요소 (필수)' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    icon: <IcEdit />,
    variant: 'solid',
    size: 'md',
    color: 'primary',
    shape: 'square',
    loading: false,
    disabled: false,
    fab: false,
  },
};

// ── Size ───────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Measurement" desc="Height 기준으로 정의. 아이콘 크기는 sm=16px, md 이상=20px.">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E4E4EE' }}>
                {['Attribute', 'sm', 'md', 'lg', 'xl', '2xl'].map(h => (
                  <th key={h} style={{ padding: '8px 24px', textAlign: 'center', fontWeight: 700, color: '#55557A',
                    ...(h !== 'Attribute' ? { background: '#F5F5F8' } : {}) }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Height', '36', '40', '44', '48', '52'],
                ['Icon size', '16', '20', '20', '20', '20'],
              ].map(row => (
                <tr key={row[0]} style={{ borderBottom: '1px solid #F0F0F8' }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '8px 24px', textAlign: 'center', color: i === 0 ? '#55557A' : '#111122', fontWeight: i === 0 ? 600 : 400 }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="Usage">
        <Row gap={12}>
          {(['sm', 'md', 'lg', 'xl', '2xl'] as ButtonIconSize[]).map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ButtonIcon icon={<IcEdit />} variant="solid" size={s} />
              <Caption>{s}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Style ──────────────────────────────────────────────────────────────────
export const Styles: Story = {
  name: 'Style',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => (
        <Block key={v} label={v}>
          <Row gap={8}>
            {(['primary', 'secondary', 'danger', 'neutral'] as ButtonIconColor[]).map(c => (
              <div key={c} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ButtonIcon icon={<IcEdit />} variant={v} color={c} />
                <Caption>{c}</Caption>
              </div>
            ))}
          </Row>
        </Block>
      ))}
    </div>
  ),
};

// ── Shape ──────────────────────────────────────────────────────────────────
export const Shapes: Story = {
  name: 'Shape',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="square" desc="사각형 형태. 일반 레이아웃에 사용합니다.">
        <Row gap={8}>
          {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => (
            <ButtonIcon key={v} icon={<IcEdit />} variant={v} shape="square" />
          ))}
        </Row>
      </Block>
      <Block label="round" desc="원형 형태. FAB 또는 플로팅 버튼으로 사용합니다.">
        <Row gap={8}>
          {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => (
            <ButtonIcon key={v} icon={<IcEdit />} variant={v} shape="round" />
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── State ──────────────────────────────────────────────────────────────────
export const States: Story = {
  name: 'State',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="enabled" desc="기본 상태.">
        <Row gap={8}>
          {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => (
            <ButtonIcon key={v} icon={<IcDownload />} variant={v} />
          ))}
        </Row>
      </Block>
      <Block label="disabled" desc="비활성 상태. 액션이 불가능한 경우.">
        <Row gap={8}>
          {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => (
            <ButtonIcon key={v} icon={<IcDownload />} variant={v} disabled />
          ))}
        </Row>
      </Block>
      <Block label="loading" desc="비동기 처리 중 스피너 노출.">
        <Row gap={8}>
          {(['solid', 'tonal', 'outlined', 'plain'] as ButtonIconVariant[]).map(v => (
            <ButtonIcon key={v} icon={<IcDownload />} variant={v} loading />
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── FAB ────────────────────────────────────────────────────────────────────
export const FAB: Story = {
  name: 'FAB',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="fab=false" desc="일반 버튼 형태.">
        <Row gap={8}>
          <ButtonIcon icon={<IcPlus />} variant="solid" fab={false} />
          <ButtonIcon icon={<IcPlus />} variant="solid" shape="round" fab={false} />
        </Row>
      </Block>
      <Block label="fab=true" desc="화면 상위에 독립적으로 노출. shadow 적용.">
        <Row gap={8}>
          <ButtonIcon icon={<IcPlus />} variant="solid" fab />
          <ButtonIcon icon={<IcPlus />} variant="solid" shape="round" fab />
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ─────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const variants: ButtonIconVariant[] = ['solid', 'tonal', 'outlined', 'plain'];
    const sizes: ButtonIconSize[] = ['sm', 'md', 'lg', 'xl', '2xl'];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                Style \ Size
              </th>
              {sizes.map(s => (
                <th key={s} style={{ padding: '8px 16px', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {variants.map(v => (
              <tr key={v} style={{ borderTop: '1px solid #F0F0F8' }}>
                <td style={{ padding: '12px 16px 12px 0', fontSize: 12, fontWeight: 600, color: '#55557A', verticalAlign: 'middle' }}>
                  {v}
                </td>
                {sizes.map(s => (
                  <td key={s} style={{ padding: '12px 16px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <ButtonIcon icon={<IcSearch />} variant={v} size={s} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
