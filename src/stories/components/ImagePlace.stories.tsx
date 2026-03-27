import type { Meta, StoryObj } from '@storybook/react';
import { ImagePlace } from '@/components/Images';

const FIGMA = 'https://www.figma.com/design/hmnbx3ka';
const figmaNode = (id: string) => ({ design: { type: 'figma' as const, url: `${FIGMA}?node-id=${id}` } });

const Label = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

const meta: Meta = {
  title: 'Components/Image/Place',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: `${FIGMA}?node-id=3055` },
    docs: {
      description: {
        component: `
이미지 배치(Place) 타입 컴포넌트입니다.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`type\` | variant | \`"default"\` | \`"default"\` \\| \`"noImage"\` \\| \`"placeHolder"\` |
| \`size\` | number | \`140\` | 크기 (px) |
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  name: 'Basic',
  parameters: figmaNode('3055'),
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-end' }}>
      {([
        { type: 'default',     desc: '이미지 표시' },
        { type: 'noImage',     desc: '이미지 없음' },
        { type: 'placeHolder', desc: '로딩 중' },
      ] as const).map(({ type, desc }) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <ImagePlace type={type} size={120} src={type === 'default' ? 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop' : undefined} />
          <Label>{type}</Label>
          <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 10, color: '#bbbbcc', margin: '2px 0 0', textAlign: 'center' }}>{desc}</p>
        </div>
      ))}
    </div>
  ),
};
