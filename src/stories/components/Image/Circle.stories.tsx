import type { Meta, StoryObj } from '@storybook/react';
import { ImageCircle } from '@/components/Images';
import type { ImageCircleType, ImageCircleSize } from '@/components/Images';

const IMG_SRC = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 8 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
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
  <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof ImageCircle> = {
  title: 'Components/Image/Circle',
  component: ImageCircle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
원형 이미지 컴포넌트. 프로필 이미지, 사용자 아바타, 채널 썸네일 등에 활용합니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | px | Usage |
|------|----|-------|
| \`32\` | 32px | 리스트 내 소형 아바타 |
| \`40\` | 40px | 댓글·리플라이 아바타 |
| \`48\` | 48px | 기본 프로필 크기 |
| \`56\` | 56px | 강조 프로필 |
| \`64\` | 64px | 카드 내 프로필 |
| \`80\` | 80px | 섹션 상단 프로필 |
| \`96\` | 96px | 채널·그룹 썸네일 |
| \`120\` | 120px | 마이페이지 대형 프로필 |

### Type

| Type | Description |
|------|-------------|
| \`default\` | 이미지 URL을 받아 표시하는 기본 상태 |
| \`noImage\` | 이미지가 없는 경우 아이콘과 빈 배경 표시 |
| \`placeHolder\` | 이미지 로딩 중 shimmer 애니메이션 표시 |

### State

| State | Description |
|-------|-------------|
| \`enabled\` | 기본 상태 |
| \`disabled\` | 비활성 상태 (opacity 0.35) |

\`\`\`tsx
import { ImageCircle } from '@/components/Images';

<ImageCircle src={imgSrc} size={48} />
<ImageCircle type="noImage" size={64} />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [32, 40, 48, 56, 64, 80, 96, 120] satisfies ImageCircleSize[],
      description: '이미지 크기 (px)',
      table: {
        type: { summary: 'ImageCircleSize' },
        defaultValue: { summary: '48' },
      },
    },
    type: {
      control: 'select',
      options: ['default', 'noImage', 'placeHolder'] satisfies ImageCircleType[],
      description: '이미지 표시 타입',
      table: {
        type: { summary: 'ImageCircleType' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '비활성 상태 (opacity 0.35)',
      table: { defaultValue: { summary: 'false' } },
    },
    src: {
      control: 'text',
      description: '이미지 URL',
      table: { type: { summary: 'string' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageCircle>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    size: 48,
    type: 'default',
    src: IMG_SRC,
  },
};

// ── Sizes ──────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Measurement" desc="크기 기준으로 정의. 사용 맥락의 레이아웃 밀도에 따라 선택합니다.">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E4E4EE' }}>
                {['Attribute', '32', '40', '48', '56', '64', '80', '96', '120'].map(h => (
                  <th key={h} style={{ padding: '8px 16px', textAlign: 'center', fontWeight: 700, color: '#55557A' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #F0F0F8' }}>
                <td style={{ padding: '8px 16px', fontWeight: 600, color: '#55557A' }}>Size (px)</td>
                {[32, 40, 48, 56, 64, 80, 96, 120].map(s => (
                  <td key={s} style={{ padding: '8px 16px', textAlign: 'center', color: '#111122' }}>{s}</td>
                ))}
              </tr>
              <tr style={{ borderBottom: '1px solid #F0F0F8' }}>
                <td style={{ padding: '8px 16px', fontWeight: 600, color: '#55557A' }}>Usage</td>
                {[
                  '소형 아바타',
                  '댓글 아바타',
                  '기본 프로필',
                  '강조 프로필',
                  '카드 프로필',
                  '섹션 상단',
                  '채널 썸네일',
                  '마이페이지',
                ].map((usage, i) => (
                  <td key={i} style={{ padding: '8px 16px', textAlign: 'center', color: '#111122' }}>{usage}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="Usage" desc="크기 별 시각화">
        <Row gap={12}>
          {([32, 40, 48, 56, 64, 80, 96, 120] as ImageCircleSize[]).map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ImageCircle src={IMG_SRC} size={size} />
              <Caption>{size}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Types ──────────────────────────────────────────────────────────────────
export const Types: Story = {
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Types" desc="이미지 표시 상태에 따른 3가지 타입 (size=64)">
        <Row gap={16}>
          {(['default', 'noImage', 'placeHolder'] as ImageCircleType[]).map(type => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ImageCircle type={type} size={64} src={type === 'default' ? IMG_SRC : undefined} />
              <Caption>{type}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── States ─────────────────────────────────────────────────────────────────
export const States: Story = {
  name: 'State',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="enabled" desc="기본 상태. 사용자가 인터랙션 가능한 경우">
        <ImageCircle src={IMG_SRC} size={64} />
      </Block>
      <Block label="disabled" desc="비활성 상태. opacity 0.35, pointer-events none">
        <ImageCircle src={IMG_SRC} size={64} disabled />
      </Block>
    </div>
  ),
};

// ── Matrix ─────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const sizes: ImageCircleSize[] = [32, 40, 48, 56, 64, 80, 96, 120];
    const types: ImageCircleType[] = ['default', 'noImage', 'placeHolder'];
    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                Size \ Type
              </th>
              {types.map(t => (
                <th key={t} style={{ padding: '8px 16px', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizes.map(size => (
              <tr key={size} style={{ borderTop: '1px solid #F0F0F8' }}>
                <td style={{ padding: '12px 16px 12px 0', fontSize: 12, fontWeight: 600, color: '#55557A', verticalAlign: 'middle' }}>
                  {size}
                </td>
                {types.map(type => (
                  <td key={type} style={{ padding: '12px 16px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <ImageCircle
                      type={type}
                      size={size}
                      src={type === 'default' ? IMG_SRC : undefined}
                    />
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
