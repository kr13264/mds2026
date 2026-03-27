import type { Meta, StoryObj } from '@storybook/react';
import { ImageOpacity } from '@/components/Images';
import type { ImageOpacityLevel } from '@/components/Images';

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
const meta: Meta<typeof ImageOpacity> = {
  title: 'Components/Image/Opacity',
  component: ImageOpacity,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
이미지 위에 검정 딤(dim) 레이어를 적용하는 Opacity 컴포넌트. 이미지 위 텍스트 가독성 확보에 활용합니다.

---

<div style="margin-bottom:30px"></div>

### Opacity Level

| Opacity | 불투명도 | Description |
|---------|---------|-------------|
| \`none\` | 0% | 딤 레이어 없음 |
| \`3%\` | 3% | 미세한 딤. 이미지 색상 변화 없이 텍스트 가독성 보조 |
| \`40%\` | 40% | 중간 딤. 이미지 위 텍스트·아이콘 명확하게 노출 |

\`\`\`tsx
import { ImageOpacity } from '@/components/Images';

<ImageOpacity src={imgSrc} opacity="40%" width={200} height={150} />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    opacity: {
      control: 'select',
      options: ['none', '3%', '40%'] satisfies ImageOpacityLevel[],
      description: '딤 레이어 불투명도',
      table: {
        type: { summary: 'ImageOpacityLevel' },
        defaultValue: { summary: 'none' },
      },
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
type Story = StoryObj<typeof ImageOpacity>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    src: IMG_SRC,
    opacity: 'none',
    width: 200,
    height: 150,
  },
};

// ── Levels ─────────────────────────────────────────────────────────────────
export const Levels: Story = {
  name: 'Opacity',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Opacity" desc="딤 레이어 불투명도 수준 비교">
        <Row gap={12}>
          {(['none', '3%', '40%'] as ImageOpacityLevel[]).map(opacity => (
            <div key={opacity} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ImageOpacity src={IMG_SRC} opacity={opacity} width={200} height={150} />
              <Caption>{opacity}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};
