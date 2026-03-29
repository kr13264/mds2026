import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '@/components/Chip';
import type { ChipType, ChipSize } from '@/components/Chip';

// ── 샘플 아이콘 ──────────────────────────────────────────────────────────────
const IcSearch = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" width="100%" height="100%">
    <circle cx="7" cy="7" r="4.5"/><path d="M11 11l2.5 2.5"/>
  </svg>
);
const IcStar = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M8 2l1.5 3.5 3.5.5-2.5 2.5.5 3.5L8 10.5 5 12l.5-3.5L3 6l3.5-.5L8 2z"/>
  </svg>
);

// ── 레이아웃 헬퍼 ─────────────────────────────────────────────────────────────
const Row = ({ children, gap = 8 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: 'Pretendard, sans-serif', fontSize: 11, fontWeight: 700,
      letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--color-neutral-foreground-subtle-3)', margin: '0 0 4px',
    }}>{label}</p>
    {desc && <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: 'var(--color-neutral-foreground-subtle-1)', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Meta ──────────────────────────────────────────────────────────────────────
const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
선택 가능한 태그/필터 칩 컴포넌트입니다.
단일 선택과 다중 선택(태그 제거) 모드를 지원합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`label\` | 텍스트 레이블 칩 (기본) |
| \`iconOnly\` | 아이콘만 표시 |

### Size

| Size | Height | Font |
|------|--------|------|
| \`sm\` | 32px | 13px |
| \`md\` | 40px | 14px |

### State

| State | Description |
|-------|-------------|
| enabled | 기본 상태 |
| selected | 선택된 상태 (Primary 배경) |
| disabled | 비활성 상태 |
| multiSelect | 선택 시 우측에 닫기 아이콘 표시 |

\`\`\`tsx
import { Chip } from '@/components/Chip';

<Chip label="전체" />
<Chip label="동영상" selected />
<Chip label="태그" multiSelect selected onRemove={() => {}} />
<Chip type="iconOnly" iconHead={<IcSearch />} />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['label', 'iconOnly'] satisfies ChipType[],
      description: '칩 타입',
      table: { type: { summary: 'ChipType' }, defaultValue: { summary: 'label' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'] satisfies ChipSize[],
      description: '사이즈',
      table: { type: { summary: 'ChipSize' }, defaultValue: { summary: 'md' } },
    },
    label:       { control: 'text',    description: '레이블 텍스트' },
    selected:    { control: 'boolean', description: '선택 상태', table: { defaultValue: { summary: 'false' } } },
    disabled:    { control: 'boolean', description: '비활성 상태', table: { defaultValue: { summary: 'false' } } },
    multiSelect: { control: 'boolean', description: '다중 선택 모드 (선택 시 닫기 아이콘)', table: { defaultValue: { summary: 'false' } } },
    iconHead:    { control: false, description: '좌측 아이콘 (ReactNode)' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// ── Playground ────────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    type: 'label',
    size: 'md',
    label: '레이블',
    selected: false,
    disabled: false,
    multiSelect: false,
  },
};

// ── Size ──────────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Measurement">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                {['Attribute', 'sm', 'md'].map(h => (
                  <th key={h} style={{ padding: '8px 24px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-foreground-subtle-1)', ...(h !== 'Attribute' ? { background: 'var(--color-neutral-background-separated-1)' } : {}) }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Height', '32px', '36px'],
                ['Font size', '13px', '14px'],
                ['Padding H', '12px', '14px'],
                ['Icon size', '14px', '16px'],
              ].map(row => (
                <tr key={row[0]} style={{ borderBottom: '1px solid var(--color-neutral-stroke-divider)' }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '8px 24px', textAlign: 'center', color: i === 0 ? 'var(--color-neutral-foreground-subtle-1)' : 'var(--color-neutral-foreground-default)', fontWeight: i === 0 ? 600 : 400 }}>
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
        <Row gap={8}>
          {(['sm', 'md'] as ChipSize[]).map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Chip label="레이블" size={s} />
              <Caption>{s}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── State ─────────────────────────────────────────────────────────────────────
export const States: Story = {
  name: 'State',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="enabled" desc="기본 상태.">
        <Chip label="레이블" />
      </Block>
      <Block label="selected" desc="선택된 상태. Primary 배경이 적용됩니다.">
        <Chip label="레이블" selected />
      </Block>
      <Block label="disabled" desc="비활성 상태.">
        <Row gap={8}>
          <Chip label="레이블" disabled />
          <Chip label="레이블" disabled selected />
        </Row>
      </Block>
    </div>
  ),
};

// ── Contents ──────────────────────────────────────────────────────────────────
export const Contents: Story = {
  name: 'Contents',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="label only" desc="기본 텍스트 칩.">
        <Row gap={8}>
          <Chip label="전체" />
          <Chip label="동영상" />
          <Chip label="이미지" />
        </Row>
      </Block>
      <Block label="icon + label" desc="좌측 아이콘과 텍스트 조합.">
        <Row gap={8}>
          <Chip label="검색" iconHead={<IcSearch />} />
          <Chip label="즐겨찾기" iconHead={<IcStar />} selected />
        </Row>
      </Block>
      <Block label="iconOnly" desc="아이콘만 표시.">
        <Row gap={8}>
          <Chip type="iconOnly" iconHead={<IcSearch />} />
          <Chip type="iconOnly" iconHead={<IcStar />} selected />
          <Chip type="iconOnly" iconHead={<IcSearch />} disabled />
        </Row>
      </Block>
      <Block label="multiSelect" desc="선택 시 우측에 닫기(×) 아이콘이 표시됩니다.">
        <Row gap={8}>
          <Chip label="디자인" multiSelect />
          <Chip label="개발" multiSelect selected />
          <Chip label="기획" iconHead={<IcStar />} multiSelect selected />
        </Row>
      </Block>
    </div>
  ),
};

// ── MultiSelect Interactive ───────────────────────────────────────────────────
export const MultiSelectDemo: Story = {
  name: 'MultiSelect',
  render: () => {
    const ALL_TAGS = ['전체', '동영상', '이미지', '뉴스', '쇼핑', '지도'];
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (tag: string) => {
      setSelected(prev =>
        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
      );
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'Pretendard, sans-serif' }}>
        <p style={{ fontSize: 12, color: 'var(--color-neutral-foreground-subtle-3)', margin: 0 }}>클릭해서 선택/해제해보세요</p>
        <Row gap={8}>
          {ALL_TAGS.map(tag => (
            <Chip
              key={tag}
              label={tag}
              multiSelect
              selected={selected.includes(tag)}
              onClick={() => toggle(tag)}
              onRemove={() => toggle(tag)}
            />
          ))}
        </Row>
        <p style={{ fontSize: 12, color: 'var(--color-neutral-foreground-subtle-1)', margin: 0 }}>
          선택됨: {selected.length > 0 ? selected.join(', ') : '없음'}
        </p>
      </div>
    );
  },
};

// ── Matrix ────────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const sizes: ChipSize[] = ['sm', 'md'];
    const states = [
      { label: 'enabled',   selected: false, disabled: false },
      { label: 'selected',  selected: true,  disabled: false },
      { label: 'disabled',  selected: false, disabled: true  },
    ];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                State \ Size
              </th>
              {sizes.map(s => (
                <th key={s} style={{ padding: '8px 24px', fontSize: 11, color: 'var(--color-neutral-foreground-subtle-3)', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', textAlign: 'center' }}>
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {states.map(st => (
              <tr key={st.label} style={{ borderTop: '1px solid var(--color-neutral-stroke-divider)' }}>
                <td style={{ padding: '12px 16px 12px 0', fontSize: 12, fontWeight: 600, color: 'var(--color-neutral-foreground-subtle-1)', verticalAlign: 'middle' }}>
                  {st.label}
                </td>
                {sizes.map(s => (
                  <td key={s} style={{ padding: '12px 24px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <Chip label="레이블" size={s} selected={st.selected} disabled={st.disabled} />
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
