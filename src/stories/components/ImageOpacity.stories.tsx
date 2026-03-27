import type { Meta, StoryObj } from '@storybook/react';
import { ImageOpacity } from '@/components/Images';
import type { ImageOpacityLevel } from '@/components/Images';

const IMG_SRC = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop';

const FIGMA = 'https://www.figma.com/design/hmnbx3ka';
const figmaNode = (id: string) => ({ design: { type: 'figma' as const, url: `${FIGMA}?node-id=${id}` } });

const Label = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

const meta: Meta = {
  title: 'Components/Image/Opacity',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: `${FIGMA}?node-id=3055` },
    docs: {
      description: {
        component: `
딤(Opacity) 레이어 컴포넌트입니다.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`opacity\` | variant | \`"none"\` | \`"none"\` \\| \`"3%"\` \\| \`"40%"\` |
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const OpacityVariants: Story = {
  name: 'Opacity',
  parameters: figmaNode('3055'),
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
      {(['none', '3%', '40%'] as ImageOpacityLevel[]).map(op => (
        <div key={op} style={{ textAlign: 'center' }}>
          <ImageOpacity src={IMG_SRC} opacity={op} width={150} height={150} />
          <Label>opacity: {op}</Label>
        </div>
      ))}
    </div>
  ),
};
