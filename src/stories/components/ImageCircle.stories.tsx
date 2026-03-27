import type { Meta, StoryObj } from '@storybook/react';
import { ImageCircle } from '@/components/Images';
import type { ImageCircleType, ImageCircleSize } from '@/components/Images';

const FIGMA = 'https://www.figma.com/design/hmnbx3ka';
const figmaNode = (id: string) => ({ design: { type: 'figma' as const, url: `${FIGMA}?node-id=${id}` } });

const Label = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

const meta: Meta<typeof ImageCircle> = {
  title: 'Components/Image/Circle',
  component: ImageCircle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: `${FIGMA}?node-id=3055` },
    docs: {
      description: {
        component: `
원형 이미지 컴포넌트. 프로필 이미지, 사용자 아바타, 채널 썸네일 등에 활용합니다.

### Props
| Prop | Type | Default | Options |
|------|------|---------|---------|
| \`type\` | variant | \`"default"\` | \`"default"\` \\| \`"noImage"\` \\| \`"placeHolder"\` |
| \`size\` | number | \`48\` | \`32\` \\| \`40\` \\| \`48\` \\| \`56\` \\| \`64\` \\| \`80\` \\| \`96\` \\| \`120\` |
| \`disabled\` | boolean | \`false\` | — |
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'noImage', 'placeHolder'] satisfies ImageCircleType[],
      description: '이미지 상태',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: [32, 40, 48, 56, 64, 80, 96, 120] satisfies ImageCircleSize[],
      description: '크기 (px)',
      table: { defaultValue: { summary: '48' } },
    },
    disabled: {
      control: 'boolean',
      description: '비활성화',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageCircle>;

// ── Basic ───────────────────────────────────────────────────────────────────
export const Basic: Story = {
  parameters: figmaNode('3055'),
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
      {([32, 40, 48, 56, 64, 80, 96, 120] as ImageCircleSize[]).map(s => (
        <div key={s} style={{ textAlign: 'center' }}>
          <ImageCircle size={s} />
          <Label>{s}</Label>
        </div>
      ))}
    </div>
  ),
};

// ── No Image ────────────────────────────────────────────────────────────────
export const NoImage: Story = {
  name: 'No Image',
  parameters: figmaNode('3055'),
  render: () => (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-end' }}>
      {([
        { type: 'default',     label: 'default' },
        { type: 'noImage',     label: 'noImage' },
        { type: 'placeHolder', label: 'placeHolder' },
      ] as { type: ImageCircleType; label: string }[]).map(({ type, label }) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <ImageCircle type={type} size={64} />
          <Label>{label}</Label>
        </div>
      ))}
    </div>
  ),
};
