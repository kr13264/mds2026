import type { Meta, StoryObj } from '@storybook/react';
import { ImageShadow } from '@/components/Images';
import type { ImageShadowDirection } from '@/components/Images';

const IMG_SRC = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop';

const FIGMA = 'https://www.figma.com/design/hmnbx3ka';
const figmaNode = (id: string) => ({ design: { type: 'figma' as const, url: `${FIGMA}?node-id=${id}` } });

const Label = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

const meta: Meta = {
  title: 'Components/Image/Shadow',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: `${FIGMA}?node-id=3055` },
    docs: {
      description: {
        component: `
그라디언트 오버레이(Shadow) 컴포넌트입니다.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`showShadow\` | boolean | \`false\` | 그림자 표시 여부 |
| \`shadow\` | variant | \`"none"\` | \`"none"\` \\| \`"up"\` \\| \`"down"\` \\| \`"up&down"\` |
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const ShadowVariants: Story = {
  name: 'Shadow',
  parameters: figmaNode('3055'),
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
      {([
        { shadow: 'none',    desc: '오버레이 없음' },
        { shadow: 'up',      desc: 'top → transparent' },
        { shadow: 'down',    desc: 'bottom → transparent' },
        { shadow: 'up&down', desc: '상하단 동시' },
      ] as { shadow: ImageShadowDirection; desc: string }[]).map(({ shadow, desc }) => (
        <div key={shadow} style={{ textAlign: 'center' }}>
          <ImageShadow src={IMG_SRC} showShadow={shadow !== 'none'} shadow={shadow} width={150} height={150} />
          <Label>{shadow}</Label>
          <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 10, color: '#bbbbcc', margin: '2px 0 0', textAlign: 'center' }}>{desc}</p>
        </div>
      ))}
    </div>
  ),
};
