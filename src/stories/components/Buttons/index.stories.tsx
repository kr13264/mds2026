import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonBasic, ButtonIcon, ButtonSegment, ButtonGroup } from '@/components/Buttons';

// ── 샘플 아이콘 ────────────────────────────────────────────────────────────
const IcPlus = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" width="100%" height="100%">
    <path d="M10 4v12M4 10h12" />
  </svg>
);
const IcDownload = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M10 3v10M6 9l4 4 4-4M3 15v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1" />
  </svg>
);
const IcShare = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <circle cx="15" cy="5" r="1.5" /><circle cx="15" cy="15" r="1.5" /><circle cx="5" cy="10" r="1.5" />
    <path d="M6.5 9.5l7-3.5M6.5 10.5l7 3.5" />
  </svg>
);
const IcEdit = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M14.5 3.5a2.121 2.121 0 0 1 3 3L6 18H3v-3L14.5 3.5z" />
  </svg>
);

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 8 }: { children: React.ReactNode; gap?: number }) => (
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

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof ButtonBasic> = {
  title: 'Components/Buttons',
  component: ButtonBasic,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
활용 목적에 따라 **4개의 type**으로 구분합니다.
각 타입은 총 6개의 size 중 적절한 값으로 적용합니다.
필요에 따라 레이블의 앞뒤에 아이콘 또는 썸네일을 선택 노출할 수 있습니다.
원형(Round)과 사각형(Square) 형태를 제공하고, 적절한 Radius값으로 조절하여 사용합니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description | Usage |
|------|-------------|-------|
| \`basic\` | 기본 버튼 (텍스트 중심으로 필요 시 아이콘 조합) | 주요 행동을 유도하는 CTA에 사용 |
| \`icon\` | 단일 아이콘 버튼 | 다운로드, 공유 등 보조적인 단일 기능 수행에 사용 |
| \`segment\` | 옵션 선택형 버튼 | 동일 위계의 옵션 중 단일 선택이 필요한 경우 사용 |
| \`group\` | 두 개 이상의 버튼 묶음형 | 관련된 복수의 액션을 함께 제시하되, 각 버튼이 독립적으로 동작해야 할 때 사용 |

### State

| State | Description |
|-------|-------------|
| \`enabled\` | 활성 상태. 조작이 가능한 경우 사용합니다. |
| \`disabled\` | 비활성 상태. 액션이 불가능한 경우 사용합니다. |

### Shape

| Shape | Description |
|-------|-------------|
| \`square\` | 모서리가 직각인 사각형 형태의 버튼 |
| \`round\` | 모서리가 둥근 형태의 버튼 |

### Width

| Width | Description |
|-------|-------------|
| \`Hug\` | 블록 내 다른 요소와 조합하는 버튼 |
| \`Fill\` | 화면 전체 너비를 활용해 액션을 강조하는 버튼 |

### FAB

| value | Description |
|-------|-------------|
| \`false\` | 일반 버튼 형태로 사용합니다. |
| \`true\` | 화면 상위에 독립적으로 노출하는 경우 사용합니다. shadow 적용. |

\`\`\`tsx
import { ButtonBasic, ButtonIcon, ButtonSegment, ButtonGroup } from '@/components/Buttons';

<ButtonBasic variant="solid" size="md" color="primary">저장하기</ButtonBasic>
<ButtonIcon icon={<IcDownload />} variant="outlined" size="md" />
<ButtonSegment options={[...]} value={val} onChange={setVal} />
<ButtonGroup cancelLabel="취소" confirmLabel="확인" />
\`\`\`
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonBasic>;

// ── Overview ───────────────────────────────────────────────────────────────
export const Overview: Story = {
  name: 'Overview',
  render: () => {
    const [segVal, setSegVal] = useState('all');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>

        {/* Basic */}
        <Block label="Basic" desc="라벨 텍스트로 구성된 기본 버튼. 아이콘·썸네일 슬롯을 지원합니다.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Row gap={8}>
              <ButtonBasic variant="solid" color="primary">Primary</ButtonBasic>
              <ButtonBasic variant="solid" color="secondary">Secondary</ButtonBasic>
              <ButtonBasic variant="solid" color="danger">Danger</ButtonBasic>
              <ButtonBasic variant="solid" color="neutral">Neutral</ButtonBasic>
            </Row>
            <Row gap={8}>
              <ButtonBasic variant="tonal" color="primary">Primary</ButtonBasic>
              <ButtonBasic variant="tonal" color="secondary">Secondary</ButtonBasic>
              <ButtonBasic variant="tonal" color="danger">Danger</ButtonBasic>
              <ButtonBasic variant="tonal" color="neutral">Neutral</ButtonBasic>
            </Row>
            <Row gap={8}>
              <ButtonBasic variant="outlined" color="primary">Primary</ButtonBasic>
              <ButtonBasic variant="outlined" color="secondary">Secondary</ButtonBasic>
              <ButtonBasic variant="outlined" color="danger">Danger</ButtonBasic>
              <ButtonBasic variant="outlined" color="neutral">Neutral</ButtonBasic>
            </Row>
            <Row gap={8}>
              <ButtonBasic variant="plain" color="primary">Primary</ButtonBasic>
              <ButtonBasic variant="plain" color="secondary">Secondary</ButtonBasic>
              <ButtonBasic variant="plain" color="danger">Danger</ButtonBasic>
              <ButtonBasic variant="plain" color="neutral">Neutral</ButtonBasic>
            </Row>
            <Row gap={8}>
              <ButtonBasic variant="solid" iconHead={<IcPlus />}>추가하기</ButtonBasic>
              <ButtonBasic variant="outlined" iconHead={<IcDownload />}>다운로드</ButtonBasic>
              <ButtonBasic variant="tonal" iconHead={<IcShare />}>공유하기</ButtonBasic>
            </Row>
          </div>
        </Block>

        {/* Icon */}
        <Block label="Icon" desc="단일 아이콘만으로 동작하는 버튼. 아이콘의 의미가 명확할 때 텍스트 없이 사용합니다.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Row gap={8}>
              <ButtonIcon icon={<IcEdit />} variant="solid" shape="square" />
              <ButtonIcon icon={<IcEdit />} variant="tonal" shape="square" />
              <ButtonIcon icon={<IcEdit />} variant="outlined" shape="square" />
              <ButtonIcon icon={<IcEdit />} variant="plain" shape="square" />
            </Row>
            <Row gap={8}>
              <ButtonIcon icon={<IcEdit />} variant="solid" shape="round" />
              <ButtonIcon icon={<IcEdit />} variant="tonal" shape="round" />
              <ButtonIcon icon={<IcEdit />} variant="outlined" shape="round" />
              <ButtonIcon icon={<IcEdit />} variant="plain" shape="round" />
            </Row>
          </div>
        </Block>

        {/* Segment */}
        <Block label="Segment" desc="동일 위계의 선택지 중 하나를 선택합니다.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Row gap={12}>
              <ButtonSegment
                shape="square"
                type="half"
                options={[{ value: 'all', label: '전체' }, { value: 'video', label: '동영상' }, { value: 'image', label: '이미지' }]}
                value={segVal}
                onChange={setSegVal}
              />
              <ButtonSegment
                shape="round"
                type="half"
                options={[{ value: 'all', label: '전체' }, { value: 'video', label: '동영상' }, { value: 'image', label: '이미지' }]}
                value={segVal}
                onChange={setSegVal}
              />
            </Row>
            <div style={{ width: 320 }}>
              <ButtonSegment
                shape="square"
                type="full"
                options={[{ value: 'all', label: '전체' }, { value: 'video', label: '동영상' }, { value: 'image', label: '이미지' }]}
                value={segVal}
                onChange={setSegVal}
              />
            </div>
          </div>
        </Block>

        {/* Group */}
        <Block label="Group" desc="두 개 이상의 버튼을 나란히 배치한 조합. 동일 위계의 액션을 제시합니다.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Row gap={12}>
              <ButtonGroup shape="square" cancelLabel="취소" confirmLabel="확인" />
              <ButtonGroup shape="round" cancelLabel="취소" confirmLabel="확인" />
            </Row>
            <Row gap={12}>
              <ButtonGroup shape="square" cancelLabel="취소" confirmLabel="확인" size="lg" />
              <ButtonGroup shape="square" cancelLabel="나중에" confirmLabel="시작하기" />
            </Row>
          </div>
        </Block>

      </div>
    );
  },
};
