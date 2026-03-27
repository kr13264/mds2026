import type { Meta, StoryObj } from '@storybook/react';
import { ImagePlace } from '@/components/Images';
import type { ImagePlaceProps } from '@/components/Images';

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
const meta: Meta<typeof ImagePlace> = {
  title: 'Components/Image/Place',
  component: ImagePlace,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
이미지 배치(Place) 상태 컴포넌트. 이미지의 로딩·없음·표시 상태를 시각적으로 구분합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`default\` | src가 있으면 이미지 표시, 없으면 그라디언트 플레이스홀더 |
| \`noImage\` | 이미지가 없는 상태. 아이콘과 회색 배경 표시 |
| \`placeHolder\` | 이미지 로딩 중 shimmer 애니메이션 표시 |

### Size

\`size\` prop (px)으로 너비·높이를 동시에 제어합니다. 기본값은 \`140\`이며 숫자로 자유롭게 지정 가능합니다.

\`\`\`tsx
import { ImagePlace } from '@/components/Images';

<ImagePlace type="default" src={imgSrc} size={120} />
<ImagePlace type="noImage" size={100} />
<ImagePlace type="placeHolder" size={140} />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'noImage', 'placeHolder'] satisfies ImagePlaceProps['type'][],
      description: '이미지 배치 타입',
      table: {
        type: { summary: "'default' | 'noImage' | 'placeHolder'" },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'number',
      description: '너비·높이 크기 (px)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '140' },
      },
    },
    src: {
      control: 'text',
      description: '이미지 URL (type="default" 일 때 사용)',
      table: { type: { summary: 'string' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImagePlace>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    type: 'default',
    size: 140,
    src: IMG_SRC,
  },
};

// ── Types ──────────────────────────────────────────────────────────────────
export const Types: Story = {
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Types" desc="이미지 배치 상태에 따른 3가지 타입">
        <Row gap={12}>
          {([
            { type: 'default' as const, src: IMG_SRC },
            { type: 'noImage' as const, src: undefined },
            { type: 'placeHolder' as const, src: undefined },
          ]).map(({ type, src }) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ImagePlace type={type} src={src} size={120} />
              <Caption>{type}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Sizes ──────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Size" desc="같은 타입(default)을 다양한 크기로 비교">
        <Row gap={12}>
          {[60, 80, 100, 120, 140].map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ImagePlace type="default" src={IMG_SRC} size={size} />
              <Caption>{size}px</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};
