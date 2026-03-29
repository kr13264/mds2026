import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSegment } from '@/components/Buttons';
import type { ButtonSegmentShape, ButtonSegmentType, ButtonSegmentSize } from '@/components/Buttons';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 16 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
      textTransform: 'uppercase', color: 'var(--color-neutral-foreground-subtle-3)', margin: '0 0 4px',
    }}>{label}</p>
    {desc && <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: 'var(--color-neutral-foreground-subtle-1)', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Controlled wrapper for stories ─────────────────────────────────────────
const SegmentDemo = (props: Omit<React.ComponentProps<typeof ButtonSegment>, 'value' | 'onChange'> & { defaultValue?: string }) => {
  const [val, setVal] = useState(props.defaultValue ?? props.options[0]?.value ?? '');
  return <ButtonSegment {...props} value={val} onChange={setVal} />;
};

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof ButtonSegment> = {
  title: 'Components/Buttons/Segment',
  component: ButtonSegment,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
동일 위계의 옵션 중 단일 선택이 필요한 경우 사용하는 세그먼트 버튼입니다.
2~4개의 옵션을 지원하며, **half**(콘텐츠 폭)와 **full**(균등 분할) 두 가지 너비 유형을 제공합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`half\` | 각 세그먼트의 너비가 콘텐츠에 맞게 결정 (기본) |
| \`full\` | 컨테이너 너비를 세그먼트 수로 균등 분할 |

### Shape

| Shape | Description |
|-------|-------------|
| \`square\` | 사각형 — 일반 레이아웃 (기본) |
| \`round\`  | 원형 — 필 형태의 세그먼트 |

\`\`\`tsx
import { ButtonSegment } from '@/components/Buttons';

<ButtonSegment
  options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]}
  value={value}
  onChange={setValue}
/>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    shape: {
      control: 'select',
      options: ['square', 'round'] satisfies ButtonSegmentShape[],
      description: '버튼 형태',
      table: { type: { summary: 'ButtonSegmentShape' }, defaultValue: { summary: 'square' } },
    },
    type: {
      control: 'select',
      options: ['half', 'full'] satisfies ButtonSegmentType[],
      description: '너비 유형',
      table: { type: { summary: 'ButtonSegmentType' }, defaultValue: { summary: 'half' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'] satisfies ButtonSegmentSize[],
      description: '높이 기준 사이즈',
      table: { type: { summary: 'ButtonSegmentSize' }, defaultValue: { summary: 'md' } },
    },
    disabled: { control: 'boolean', description: '전체 비활성', table: { defaultValue: { summary: 'false' } } },
    value: { control: false },
    onChange: { control: false },
    options: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonSegment>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  render: (args) => {
    const [val, setVal] = useState('all');
    return (
      <ButtonSegment
        {...args}
        options={[
          { value: 'all', label: '전체' },
          { value: 'video', label: '동영상' },
          { value: 'image', label: '이미지' },
        ]}
        value={val}
        onChange={setVal}
      />
    );
  },
  args: {
    shape: 'square',
    type: 'half',
    size: 'md',
    disabled: false,
  },
};

// ── Type ───────────────────────────────────────────────────────────────────
export const Types: Story = {
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="half" desc="각 세그먼트의 너비가 콘텐츠에 맞게 자동 결정됩니다.">
        <Row>
          <SegmentDemo
            type="half"
            options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]}
          />
          <SegmentDemo
            type="half"
            options={[{ value: 'a', label: '인기' }, { value: 'b', label: '최신' }, { value: 'c', label: '추천' }]}
          />
          <SegmentDemo
            type="half"
            options={[{ value: 'a', label: '1일' }, { value: 'b', label: '1주' }, { value: 'c', label: '1개월' }, { value: 'd', label: '3개월' }]}
          />
        </Row>
      </Block>
      <Block label="full" desc="컨테이너 너비를 세그먼트 수로 균등 분할합니다.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
          <SegmentDemo
            type="full"
            options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]}
          />
          <SegmentDemo
            type="full"
            options={[{ value: 'a', label: '인기' }, { value: 'b', label: '최신' }, { value: 'c', label: '추천' }]}
          />
          <SegmentDemo
            type="full"
            options={[{ value: 'a', label: '1일' }, { value: 'b', label: '1주' }, { value: 'c', label: '1개월' }, { value: 'd', label: '3개월' }]}
          />
        </div>
      </Block>
    </div>
  ),
};

// ── Shape ──────────────────────────────────────────────────────────────────
export const Shapes: Story = {
  name: 'Shape',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="square" desc="사각형 형태. 일반 레이아웃에 사용합니다.">
        <Row>
          <SegmentDemo
            shape="square"
            options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]}
          />
        </Row>
      </Block>
      <Block label="round" desc="원형(Pill) 형태. 필터 또는 태그형 선택에 사용합니다.">
        <Row>
          <SegmentDemo
            shape="round"
            options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]}
          />
        </Row>
      </Block>
    </div>
  ),
};

// ── Line (Options count) ────────────────────────────────────────────────────
export const Lines: Story = {
  name: 'Line',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="2개" desc="line=2">
        <Row>
          <SegmentDemo options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]} />
          <SegmentDemo shape="round" options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }]} />
        </Row>
      </Block>
      <Block label="3개" desc="line=3">
        <Row>
          <SegmentDemo options={[{ value: 'a', label: '인기' }, { value: 'b', label: '최신' }, { value: 'c', label: '추천' }]} />
          <SegmentDemo shape="round" options={[{ value: 'a', label: '인기' }, { value: 'b', label: '최신' }, { value: 'c', label: '추천' }]} />
        </Row>
      </Block>
      <Block label="4개" desc="line=4">
        <Row>
          <SegmentDemo options={[{ value: 'a', label: '1일' }, { value: 'b', label: '1주' }, { value: 'c', label: '1개월' }, { value: 'd', label: '3개월' }]} />
          <SegmentDemo shape="round" options={[{ value: 'a', label: '1일' }, { value: 'b', label: '1주' }, { value: 'c', label: '1개월' }, { value: 'd', label: '3개월' }]} />
        </Row>
      </Block>
    </div>
  ),
};

// ── Size ───────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['sm', 'md', 'lg'] as ButtonSegmentSize[]).map(s => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <SegmentDemo
            size={s}
            options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]}
          />
          <Caption>{s}</Caption>
        </div>
      ))}
    </div>
  ),
};

// ── State ──────────────────────────────────────────────────────────────────
export const States: Story = {
  name: 'State',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="enabled" desc="기본 상태.">
        <SegmentDemo options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]} />
      </Block>
      <Block label="disabled" desc="전체 비활성 상태.">
        <SegmentDemo options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]} disabled />
      </Block>
      <Block label="item disabled" desc="특정 옵션만 비활성 상태.">
        <SegmentDemo
          options={[
            { value: 'a', label: '전체' },
            { value: 'b', label: '구독', disabled: true },
            { value: 'c', label: '최신' },
          ]}
        />
      </Block>
    </div>
  ),
};

// ── Matrix ─────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const shapes: ButtonSegmentShape[] = ['square', 'round'];
    const types: ButtonSegmentType[] = ['half', 'full'];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                shape \ type
              </th>
              {types.map(t => (
                <th key={t} style={{ padding: '8px 24px', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shapes.map(sh => (
              <tr key={sh} style={{ borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
                <td style={{ padding: '16px 16px 16px 0', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>
                  {sh}
                </td>
                {types.map(t => (
                  <td key={t} style={{ padding: '16px 24px', verticalAlign: 'middle' }}>
                    <div style={{ width: t === 'full' ? 240 : 'auto' }}>
                      <SegmentDemo
                        shape={sh}
                        type={t}
                        options={[{ value: 'a', label: '전체' }, { value: 'b', label: '구독' }, { value: 'c', label: '최신' }]}
                      />
                    </div>
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
