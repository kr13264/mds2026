import type { Meta, StoryObj } from '@storybook/react';
import { ImageShadow } from '@/components/Images';
import type { ImageShadowDirection } from '@/components/Images';

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
const meta: Meta<typeof ImageShadow> = {
  title: 'Components/Image/Shadow',
  component: ImageShadow,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
이미지 위에 방향성 그라디언트 오버레이를 적용하는 Shadow 컴포넌트. 이미지 엣지 처리 및 UI 요소와의 경계 구분에 활용합니다.

---

<div style="margin-bottom:30px"></div>

### Shadow Direction

| Shadow | Direction | Description |
|--------|-----------|-------------|
| \`none\` | — | 오버레이 없음 |
| \`up\` | 상단 | top → transparent 방향 그라디언트 |
| \`down\` | 하단 | bottom → transparent 방향 그라디언트 |
| \`up&down\` | 상·하단 | 상단과 하단 동시 적용 |

\`\`\`tsx
import { ImageShadow } from '@/components/Images';

<ImageShadow src={imgSrc} showShadow={true} shadow="down" width={200} height={150} />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    shadow: {
      control: 'select',
      options: ['none', 'up', 'down', 'up&down'] satisfies ImageShadowDirection[],
      description: '그라디언트 방향',
      table: {
        type: { summary: 'ImageShadowDirection' },
        defaultValue: { summary: 'none' },
      },
    },
    showShadow: {
      control: 'boolean',
      description: '그라디언트 오버레이 표시 여부',
      table: { defaultValue: { summary: 'false' } },
    },
    width: {
      control: 'number',
      description: '컴포넌트 너비 (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '150' },
      },
    },
    height: {
      control: 'number',
      description: '컴포넌트 높이 (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '150' },
      },
    },
    src: {
      control: 'text',
      description: '이미지 URL',
      table: { type: { summary: 'string' } },
    },
    disabled: {
      control: 'boolean',
      description: '비활성 상태 (opacity 0.35)',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageShadow>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    src: IMG_SRC,
    showShadow: true,
    shadow: 'down',
    width: 200,
    height: 150,
  },
};

// ── Directions ─────────────────────────────────────────────────────────────
export const Directions: Story = {
  name: 'Shadow',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Shadow Directions" desc="방향성 그라디언트 오버레이 비교">
        <Row gap={12}>
          {([
            { shadow: 'none' as ImageShadowDirection, showShadow: false, desc: '오버레이 없음' },
            { shadow: 'up' as ImageShadowDirection, showShadow: true, desc: 'top → transparent' },
            { shadow: 'down' as ImageShadowDirection, showShadow: true, desc: 'bottom → transparent' },
            { shadow: 'up&down' as ImageShadowDirection, showShadow: true, desc: '상하단 동시' },
          ]).map(({ shadow, showShadow, desc }) => (
            <div key={shadow} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ImageShadow src={IMG_SRC} shadow={shadow} showShadow={showShadow} width={200} height={150} />
              <Caption>{shadow}</Caption>
              <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 10, color: '#bbbbcc', margin: '2px 0 0', textAlign: 'center' }}>{desc}</p>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};
