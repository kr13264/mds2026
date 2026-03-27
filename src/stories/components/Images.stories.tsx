import type { Meta, StoryObj } from '@storybook/react';
import { ImageRect } from '@/components/Images';
import type { ImageRectType, ImageRectRatio, ImageRectOpacity, ImageRectShadow, ImageRectFit } from '@/components/Images';

const FIGMA_FILE = 'https://www.figma.com/design/hmnbx3ka';
const figmaNode = (id: string) => ({ design: { type: 'figma' as const, url: `${FIGMA_FILE}?node-id=${id}` } });

const IMG_SRC = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop';
const IMG = {
  landscape: IMG_SRC,
  portrait:  IMG_SRC,
  square:    IMG_SRC,
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

const meta: Meta<typeof ImageRect> = {
  title: 'Components/Image/Rectangle',
  component: ImageRect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: `${FIGMA_FILE}?node-id=3055` },
    docs: {
      description: {
        component: `
비율(ratio), 딤 레이어(opacity), 그림자(shadow), object-fit 조합으로 구성된 Rectangle 이미지 래퍼 컴포넌트.

### Props
| Prop | Type | Default | Options |
|------|------|---------|---------|
| \`type\` | variant | \`"default"\` | \`"default"\` \\| \`"noImage"\` \\| \`"placeHolder"\` |
| \`ratio\` | variant | \`"1:1"\` | \`"1:1"\` \\| \`"16:9"\` \\| \`"3:2"\` \\| \`"3:4"\` \\| \`"3:4.5"\` \\| \`"3:5"\` \\| \`"noFix"\` |
| \`opacity\` | variant | \`"none"\` | \`"none"\` \\| \`"3%"\` \\| \`"40%"\` |
| \`shadow\` | variant | \`"none"\` | \`"none"\` \\| \`"up"\` \\| \`"down"\` \\| \`"up&down"\` |
| \`fit\` | variant | \`"cover"\` | \`"cover"\` \\| \`"contain"\` \\| \`"fill"\` \\| \`"scale-down"\` |
| \`label\` | string | — | 하단 오버레이 텍스트 |
| \`icon\` | boolean | \`false\` | 우상단 아이콘 뱃지 |
| \`disabled\` | boolean | \`false\` | opacity 0.35 |
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'noImage', 'placeHolder'] satisfies ImageRectType[],
      description: '이미지 표시 타입',
      table: { defaultValue: { summary: 'default' } },
    },
    ratio: {
      control: 'select',
      options: ['1:1', '16:9', '3:2', '3:4', '3:4.5', '3:5', 'noFix'] satisfies ImageRectRatio[],
      description: '비율',
      table: { defaultValue: { summary: '1:1' } },
    },
    opacity: {
      control: 'select',
      options: ['none', '3%', '40%'] satisfies ImageRectOpacity[],
      description: '딤 레이어',
      table: { defaultValue: { summary: 'none' } },
    },
    shadow: {
      control: 'select',
      options: ['none', 'up', 'down', 'up&down'] satisfies ImageRectShadow[],
      description: '그림자 방향',
      table: { defaultValue: { summary: 'none' } },
    },
    fit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'scale-down'] satisfies ImageRectFit[],
      description: 'object-fit',
      table: { defaultValue: { summary: 'cover' } },
    },
    label: { control: 'text', description: '하단 오버레이 텍스트' },
    icon:  { control: 'boolean', description: '우상단 아이콘 뱃지', table: { defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', description: '비활성화', table: { defaultValue: { summary: 'false' } } },
  },
};

export default meta;
type Story = StoryObj<typeof ImageRect>;

// ── Basic ───────────────────────────────────────────────────────────────────
export const Basic: Story = {
  parameters: figmaNode('3055'),
  args: {
    src: IMG.landscape,
    alt: '샘플 이미지',
    ratio: '16:9',
    type: 'default',
    opacity: 'none',
    shadow: 'none',
    fit: 'cover',
  },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

// ── Dimmed ──────────────────────────────────────────────────────────────────
export const Dimmed: Story = {
  name: 'Dimmed',
  parameters: figmaNode('3055'),
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {(['none', '3%', '40%'] as ImageRectOpacity[]).map(op => (
        <div key={op} style={{ width: 200 }}>
          <ImageRect src={IMG.landscape} ratio="16:9" opacity={op} />
          <Label>opacity: {op}</Label>
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
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {([
        { type: 'default',     desc: 'default' },
        { type: 'noImage',     desc: 'noImage' },
        { type: 'placeHolder', desc: 'placeHolder' },
      ] as { type: ImageRectType; desc: string }[]).map(({ type, desc }) => (
        <div key={type} style={{ width: 180 }}>
          <ImageRect type={type} src={type === 'default' ? IMG.square : undefined} ratio="1:1" />
          <Label>{desc}</Label>
        </div>
      ))}
    </div>
  ),
};

// ── Ratio ───────────────────────────────────────────────────────────────────
export const Ratio: Story = {
  name: 'Ratio',
  parameters: figmaNode('3055'),
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 160px)', gap: 12 }}>
      {(['1:1', '16:9', '3:2', '3:4', '3:4.5', '3:5'] as ImageRectRatio[]).map(ratio => (
        <div key={ratio}>
          <ImageRect src={IMG.landscape} ratio={ratio} style={{ width: '100%' }} />
          <Label>{ratio}</Label>
        </div>
      ))}
    </div>
  ),
};

// ── Fit Contain ─────────────────────────────────────────────────────────────
export const FitContain: Story = {
  name: 'Fit Contain',
  parameters: figmaNode('3055'),
  args: {
    src: IMG.portrait,
    alt: '세로 이미지',
    ratio: '16:9',
    fit: 'contain',
  },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

// ── Fit Cover ───────────────────────────────────────────────────────────────
export const FitCover: Story = {
  name: 'Fit Cover',
  parameters: figmaNode('3055'),
  args: {
    src: IMG.portrait,
    alt: '세로 이미지',
    ratio: '16:9',
    fit: 'cover',
  },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

// ── Fit Fill ────────────────────────────────────────────────────────────────
export const FitFill: Story = {
  name: 'Fit Fill',
  parameters: figmaNode('3055'),
  args: {
    src: IMG.portrait,
    alt: '세로 이미지',
    ratio: '16:9',
    fit: 'fill',
  },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

// ── Fit Scale Down ──────────────────────────────────────────────────────────
export const FitScaleDown: Story = {
  name: 'Fit Scale Down',
  parameters: figmaNode('3055'),
  args: {
    src: IMG.portrait,
    alt: '세로 이미지',
    ratio: '16:9',
    fit: 'scale-down',
  },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
