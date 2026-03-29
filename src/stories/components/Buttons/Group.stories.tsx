import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '@/components/Buttons';
import type { ButtonGroupShape, ButtonGroupSize } from '@/components/Buttons';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 16 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }}>{children}</div>
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

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Buttons/Group',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
관련된 복수의 액션을 함께 제시하는 버튼 그룹입니다.
취소(outlined/neutral)와 확인(solid/primary) 패턴으로 구성됩니다.
다이얼로그·바텀시트·폼 제출 등 명시적인 확인이 필요한 영역에 사용합니다.

---

<div style="margin-bottom:30px"></div>

### Shape

| Shape | Description |
|-------|-------------|
| \`square\` | 사각형 — 일반 레이아웃 (기본) |
| \`round\`  | 원형 — 소프트한 느낌이 필요한 경우 |

### Size

| Size | Height | Description |
|------|--------|-------------|
| \`sm\` | 36px | 좁은 영역 내 보조 확인 |
| \`md\` | 40px | 기본 — 일반 폼·모달 |
| \`lg\` | 44px | 강조된 확인이 필요한 경우 |

\`\`\`tsx
import { ButtonGroup } from '@/components/Buttons';

<ButtonGroup
  cancelLabel="취소"
  confirmLabel="저장"
  onCancel={handleCancel}
  onConfirm={handleConfirm}
  shape="square"
  size="md"
/>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    shape: {
      control: 'select',
      options: ['square', 'round'] satisfies ButtonGroupShape[],
      description: '버튼 형태',
      table: { type: { summary: 'ButtonGroupShape' }, defaultValue: { summary: 'square' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'] satisfies ButtonGroupSize[],
      description: '높이 기준 사이즈',
      table: { type: { summary: 'ButtonGroupSize' }, defaultValue: { summary: 'md' } },
    },
    cancelLabel: { control: 'text', description: '취소 버튼 레이블', table: { defaultValue: { summary: '취소' } } },
    confirmLabel: { control: 'text', description: '확인 버튼 레이블', table: { defaultValue: { summary: '확인' } } },
    fullWidth: { control: 'boolean', description: '전체 너비', table: { defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', description: '전체 비활성', table: { defaultValue: { summary: 'false' } } },
    onCancel: { control: false },
    onConfirm: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    cancelLabel: '취소',
    confirmLabel: '확인',
    shape: 'square',
    size: 'md',
    fullWidth: false,
    disabled: false,
  },
};

// ── Shape ──────────────────────────────────────────────────────────────────
export const Shapes: Story = {
  name: 'Shape',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="square" desc="사각형 형태. 일반 폼·모달·다이얼로그에 사용합니다.">
        <Row>
          <ButtonGroup shape="square" cancelLabel="취소" confirmLabel="확인" />
        </Row>
      </Block>
      <Block label="round" desc="원형 형태. 바텀시트 등 소프트한 레이아웃에 사용합니다.">
        <Row>
          <ButtonGroup shape="round" cancelLabel="취소" confirmLabel="확인" />
        </Row>
      </Block>
    </div>
  ),
};

// ── Size ───────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Measurement" desc="Height 기준으로 정의합니다.">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                {['Attribute', 'sm', 'md', 'lg'].map(h => (
                  <th key={h} style={{ padding: '8px 32px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-foreground-subtle-1)',
                    ...(h !== 'Attribute' ? { background: 'var(--color-neutral-background-separated-1)' } : {}) }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Height', '36', '40', '44'],
                ['Text size', '14', '15', '15'],
              ].map(row => (
                <tr key={row[0]} style={{ borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '8px 32px', textAlign: 'center', color: i === 0 ? 'var(--color-neutral-foreground-subtle-1)' : 'var(--color-neutral-foreground-default)', fontWeight: i === 0 ? 600 : 400 }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="Usage">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {(['sm', 'md', 'lg'] as ButtonGroupSize[]).map(s => (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <ButtonGroup size={s} cancelLabel="취소" confirmLabel="확인" />
              <Caption>{s}</Caption>
            </div>
          ))}
        </div>
      </Block>
    </div>
  ),
};

// ── State ──────────────────────────────────────────────────────────────────
export const States: Story = {
  name: 'State',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="enabled" desc="기본 상태.">
        <Row>
          <ButtonGroup cancelLabel="취소" confirmLabel="확인" />
          <ButtonGroup shape="round" cancelLabel="취소" confirmLabel="확인" />
        </Row>
      </Block>
      <Block label="disabled" desc="전체 비활성 상태.">
        <Row>
          <ButtonGroup cancelLabel="취소" confirmLabel="확인" disabled />
          <ButtonGroup shape="round" cancelLabel="취소" confirmLabel="확인" disabled />
        </Row>
      </Block>
    </div>
  ),
};

// ── Full Width ──────────────────────────────────────────────────────────────
export const FullWidths: Story = {
  name: 'Full Width',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 360 }}>
      <Block label="fullWidth" desc="바텀시트·모달 하단 등 전체 너비가 필요한 경우.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ButtonGroup fullWidth cancelLabel="취소" confirmLabel="저장" size="lg" />
          <ButtonGroup fullWidth shape="round" cancelLabel="취소" confirmLabel="저장" size="lg" />
        </div>
      </Block>
    </div>
  ),
};

// ── Labels ─────────────────────────────────────────────────────────────────
export const Labels: Story = {
  name: 'Labels',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Block label="패턴 예시" desc="콘텍스트에 맞는 레이블을 사용합니다.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ButtonGroup cancelLabel="취소" confirmLabel="확인" />
          <ButtonGroup cancelLabel="나중에" confirmLabel="시작하기" />
          <ButtonGroup cancelLabel="닫기" confirmLabel="저장하기" />
          <ButtonGroup cancelLabel="아니오" confirmLabel="예, 삭제합니다" />
        </div>
      </Block>
    </div>
  ),
};

// ── Matrix ─────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const shapes: ButtonGroupShape[] = ['square', 'round'];
    const sizes: ButtonGroupSize[] = ['sm', 'md', 'lg'];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                shape \ size
              </th>
              {sizes.map(s => (
                <th key={s} style={{ padding: '8px 24px', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {s}
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
                {sizes.map(s => (
                  <td key={s} style={{ padding: '16px 24px', verticalAlign: 'middle' }}>
                    <ButtonGroup shape={sh} size={s} cancelLabel="취소" confirmLabel="확인" />
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
