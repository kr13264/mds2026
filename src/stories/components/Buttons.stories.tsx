import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Buttons';
import type { ButtonVariant, ButtonSize, ButtonColor } from '@/components/Buttons';

// ── 샘플 아이콘 ────────────────────────────────────────────────────────────
const IcPlus = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" width="100%" height="100%">
    <path d="M10 4v12M4 10h12" />
  </svg>
);
const IcArrow = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M4 10h12M12 5l5 5-5 5" />
  </svg>
);
const IcTrash = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M3 6h14M8 6V4.5A.5.5 0 0 1 8.5 4h3a.5.5 0 0 1 .5.5V6M5 6l1 10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-10" />
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

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 8 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap }} >{children}</div>
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

// ── Figma ──────────────────────────────────────────────────────────────────
const FIGMA_FILE = 'https://www.figma.com/design/bjbgnz2o';

const figmaNode = (nodeId: string) => ({
  design: {
    type: 'figma' as const,
    url: `${FIGMA_FILE}?node-id=${nodeId}`,
  },
});

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof Button> = {
  title: 'Components/Buttons',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: FIGMA_FILE,
    },
    docs: {
      description: {
        component: `
활용 목적에 따라 **4개의 type**으로 구분합니다.
각 타입은 총 **6개의 size** 중 적절한 값으로 적용합니다.
필요에 따라 레이블의 앞뒤에 아이콘 또는 썸네일을 선택 노출할 수 있습니다.
원형(Round)과 사각형(Square) 형태를 제공하고, 적절한 Radius값으로 조절하여 사용합니다.

---

### Type

| Type | Description | Usage |
|------|-------------|-------|
| \`basic\` | 기본 버튼 (텍스트 중심으로 필요 시 아이콘 조합) | 주요 행동을 유도하는 CTA에 사용 |
| \`icon\` | 단일 아이콘 버튼 | 다운로드, 공유 등 보조적인 단일 기능 수행에 사용 |
| \`segment\` | 옵션 선택형 버튼 | 동일 위계의 옵션 중 단일 선택이 필요한 경우 사용 |
| \`group\` | 두 개 이상의 버튼 묶음형 | 관련된 복수의 액션을 함께 제시하되, 각 버튼이 독립적으로 동작해야 할 때 |

### Style (variant)

| Style | Description |
|-------|-------------|
| \`plain\` | 강조 없음. 최소한의 시각적 무게가 필요한 경우 사용 |
| \`outlined\` | 약한 강조. 선택적 액션에 사용 |
| \`tonal\` | 중간 강조. 보조 액션에 사용 |
| \`solid\` | 강한 강조. 주요 설정값을 적용하거나 구매·예약 등의 CTA에 사용 |

### State

| State | Description |
|-------|-------------|
| \`enabled\` | 기본 상태. 사용자가 인터랙션 가능한 경우 |
| \`disabled\` | 비활성 상태. 액션이 불가능한 경우 |

### Contents (Slots)

| Slot | Value | Description |
|------|-------|-------------|
| \`label\` | default | 버튼의 텍스트 레이블 |
| \`iconHead\` | false / true | 레이블 왼쪽 아이콘 — 레이블을 보조하는 시각정보 |
| \`iconTail\` | false / true | 레이블 오른쪽 아이콘 — 수행 이후의 동작을 예상하도록 돕는 보조장치 |
| \`count\` | false / true | 액션이 발생할 때마다 카운트, 전환되는 리스트 위치를 안내 |
| \`thumbnail\` | false / true | 버튼 내부의 이미지 썸네일 |

\`\`\`tsx
import { Button } from '@/components/Buttons';

<Button variant="solid" size="md" color="primary">저장하기</Button>
<Button variant="outlined" size="sm" iconHead={<IcDownload />}>다운로드</Button>
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['plain', 'outlined', 'tonal', 'solid'] satisfies ButtonVariant[],
      description: '강조 수준 스타일',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] satisfies ButtonSize[],
      description: '높이 기준 사이즈 (xs=28 · sm=36 · md=40 · lg=44 · xl=48 · 2xl=52)',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'neutral'] satisfies ButtonColor[],
      description: '색상 테마',
      table: {
        type: { summary: 'ButtonColor' },
        defaultValue: { summary: 'primary' },
      },
    },
    loading: {
      control: 'boolean',
      description: '로딩 스피너 표시 및 자동 비활성화',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: '비활성 상태 — 액션이 불가능한 경우',
      table: { defaultValue: { summary: 'false' } },
    },
    fab: {
      control: 'boolean',
      description: 'FAB — 화면 위 독립 노출 시 shadow 적용',
      table: { defaultValue: { summary: 'false' } },
    },
    fullWidth: {
      control: 'boolean',
      description: '부모 너비 100%',
      table: { defaultValue: { summary: 'false' } },
    },
    count: {
      control: 'number',
      description: '카운트 배지 숫자',
    },
    iconHead: { control: false, description: '레이블 왼쪽 아이콘 (iconHead)' },
    iconTail: { control: false, description: '레이블 오른쪽 아이콘 (iconTail)' },
    thumbnail: { control: 'text', description: '내부 썸네일 이미지 URL' },
    children: { control: 'text', description: '버튼 레이블' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  parameters: {
    ...figmaNode('0-1'), // TODO: Figma에서 Button Overview 프레임 node-id로 교체
  },
  args: {
    variant: 'solid',
    size: 'md',
    color: 'primary',
    children: '버튼',
    loading: false,
    disabled: false,
    fullWidth: false,
    fab: false,
  },
};

// ── Style (Variant) ────────────────────────────────────────────────────────
export const Styles: Story = {
  name: 'Style — plain · outlined · tonal · solid',
  parameters: {
    ...figmaNode('0-2'), // TODO: Style 섹션 프레임 node-id로 교체
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="solid" desc="강한 강조. 주요 설정값을 적용하거나 구매·예약 등의 과업을 완결하는 CTA에 사용">
        <Row>
          <Button variant="solid" color="primary">Primary</Button>
          <Button variant="solid" color="secondary">Secondary</Button>
          <Button variant="solid" color="danger">Danger</Button>
          <Button variant="solid" color="neutral">Neutral</Button>
        </Row>
      </Block>
      <Block label="tonal" desc="중간 강조. 보조 액션에 사용">
        <Row>
          <Button variant="tonal" color="primary">Primary</Button>
          <Button variant="tonal" color="secondary">Secondary</Button>
          <Button variant="tonal" color="danger">Danger</Button>
          <Button variant="tonal" color="neutral">Neutral</Button>
        </Row>
      </Block>
      <Block label="outlined" desc="약한 강조. 선택적 액션에 사용">
        <Row>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="danger">Danger</Button>
          <Button variant="outlined" color="neutral">Neutral</Button>
        </Row>
      </Block>
      <Block label="plain" desc="강조 없음. 최소한의 시각적 무게가 필요한 경우 사용">
        <Row>
          <Button variant="plain" color="primary">Primary</Button>
          <Button variant="plain" color="secondary">Secondary</Button>
          <Button variant="plain" color="danger">Danger</Button>
          <Button variant="plain" color="neutral">Neutral</Button>
        </Row>
      </Block>
    </div>
  ),
};

// ── Size ───────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size — xs · sm · md · lg · xl · 2xl',
  parameters: {
    ...figmaNode('0-3'), // TODO: Size 섹션 프레임 node-id로 교체
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Measurement" desc="Height 기준으로 정의. 사용되는 레이아웃 밀도에 따라 선택합니다.">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E4E4EE' }}>
                {['Attribute', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'].map(h => (
                  <th key={h} style={{ padding: '8px 16px', textAlign: 'center', fontWeight: 700, color: '#55557A' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Height', '28', '36', '40', '44', '48', '52'],
                ['Icon size', '최대 16', '최대 16', '최대 20', '최대 20', '최대 20', '최대 20'],
                ['Text size', '12', '14', '15', '15', '16', '16'],
                ['Min padding', '10', '12', '12', '16', '16', '20'],
                ['Radius', '최소 6', '최소 6', '최소 8', '최소 8', '최소 8', '최소 8'],
              ].map(row => (
                <tr key={row[0]} style={{ borderBottom: '1px solid #F0F0F8' }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '8px 16px', textAlign: 'center', color: i === 0 ? '#55557A' : '#111122', fontWeight: i === 0 ? 600 : 400 }}>
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
          {(
            [
              { size: 'xs', desc: '공간 제한이 있는 인라인 영역 내 제공하는 경우' },
              { size: 'sm', desc: '카드·리스트 등 블록 내 보조 기능 또는 이동 경로 제안하는 경우' },
              { size: 'md', desc: '기본 사이즈로 일반 콘텐츠 영역에서 사용하는 경우' },
              { size: 'lg', desc: '섹션 내 주요 행동을 유도하는 경우' },
              { size: 'xl', desc: '페이지 하단 또는 폼 제출 영역의 전체 너비로 활용하는 경우' },
              { size: '2xl', desc: '다이얼로그·바텀시트 등 명시적인 확인이 필요한 경우' },
            ] as { size: ButtonSize; desc: string }[]
          ).map(({ size, desc }) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Button variant="solid" size={size}>{size}</Button>
              <span style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: '#55557A' }}>{desc}</span>
            </div>
          ))}
        </div>
      </Block>
    </div>
  ),
};

// ── State ──────────────────────────────────────────────────────────────────
export const States: Story = {
  name: 'State — enabled · disabled · loading',
  parameters: {
    ...figmaNode('0-4'), // TODO: State 섹션 프레임 node-id로 교체
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="enabled" desc="기본 상태. 사용자가 인터랙션 가능한 경우">
        <Row>
          <Button variant="solid">Solid</Button>
          <Button variant="tonal">Tonal</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="plain">Plain</Button>
        </Row>
      </Block>
      <Block label="disabled" desc="비활성 상태. 액션이 불가능한 경우 사용합니다.">
        <Row>
          <Button variant="solid" disabled>Solid</Button>
          <Button variant="tonal" disabled>Tonal</Button>
          <Button variant="outlined" disabled>Outlined</Button>
          <Button variant="plain" disabled>Plain</Button>
        </Row>
      </Block>
      <Block label="loading" desc="비동기 처리 중 스피너 노출. 자동으로 disabled 처리됩니다.">
        <Row>
          <Button variant="solid" loading>저장 중...</Button>
          <Button variant="tonal" loading>처리 중</Button>
          <Button variant="outlined" loading>불러오는 중</Button>
        </Row>
      </Block>
    </div>
  ),
};

// ── Contents (Slots) ───────────────────────────────────────────────────────
export const Contents: Story = {
  name: 'Contents — iconHead · iconTail · count · thumbnail',
  parameters: {
    ...figmaNode('0-5'), // TODO: Contents 섹션 프레임 node-id로 교체
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="iconHead" desc="레이블 왼쪽 아이콘. 레이블을 보조하는 시각정보로 사용합니다.">
        <Row>
          <Button variant="solid" iconHead={<IcPlus />}>추가하기</Button>
          <Button variant="outlined" iconHead={<IcDownload />}>다운로드</Button>
          <Button variant="tonal" iconHead={<IcShare />}>공유하기</Button>
          <Button variant="plain" color="danger" iconHead={<IcTrash />}>삭제</Button>
        </Row>
      </Block>
      <Block label="iconTail" desc="레이블 오른쪽 아이콘. 수행 이후의 동작을 예상하도록 돕는 보조장치.">
        <Row>
          <Button variant="solid" iconTail={<IcArrow />}>다음 단계</Button>
          <Button variant="outlined" iconTail={<IcArrow />}>더 보기</Button>
          <Button variant="plain" iconTail={<IcArrow />}>자세히 보기</Button>
        </Row>
      </Block>
      <Block label="count" desc="액션이 발생할 때마다 카운트. 전환되는 리스트 위치를 안내합니다.">
        <Row>
          <Button variant="solid" count={3}>알림</Button>
          <Button variant="tonal" count={12}>댓글</Button>
          <Button variant="outlined" count={99}>메시지</Button>
          <Button variant="solid" count={100}>99+ 테스트</Button>
        </Row>
      </Block>
      <Block label="icon only" desc="단일 아이콘 버튼 (type=icon). px를 줄여 정사각형 형태로 사용합니다.">
        <Row>
          <Button variant="solid" className="!px-2.5"><IcPlus /></Button>
          <Button variant="tonal" className="!px-2.5"><IcDownload /></Button>
          <Button variant="outlined" className="!px-2.5"><IcShare /></Button>
          <Button variant="plain" className="!px-2.5"><IcTrash /></Button>
          <Button variant="solid" size="sm" className="!px-2"><IcPlus /></Button>
          <Button variant="solid" size="lg" className="!px-3"><IcPlus /></Button>
        </Row>
      </Block>
    </div>
  ),
};

// ── FAB ────────────────────────────────────────────────────────────────────
export const FAB: Story = {
  name: 'FAB — Floating Action Button',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="fab=false" desc="일반 버튼 형태로 사용합니다.">
        <Row>
          <Button variant="solid" fab={false} iconHead={<IcPlus />}>새로 만들기</Button>
          <Button variant="solid" fab={false} className="!px-2.5"><IcPlus /></Button>
        </Row>
      </Block>
      <Block label="fab=true" desc="화면 상위에 독립적으로 노출하는 경우 사용합니다. shadow 적용.">
        <Row>
          <Button variant="solid" fab iconHead={<IcPlus />}>새로 만들기</Button>
          <Button variant="solid" fab className="!px-2.5 rounded-full"><IcPlus /></Button>
        </Row>
      </Block>
    </div>
  ),
};

// ── Full Width ─────────────────────────────────────────────────────────────
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Block label="Full Width" desc="페이지 하단·폼 제출·바텀시트 등에서 사용합니다.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Button variant="solid" size="xl" fullWidth>로그인</Button>
          <Button variant="outlined" size="xl" fullWidth>회원가입</Button>
          <Button variant="plain" size="md" fullWidth>나중에 하기</Button>
        </div>
      </Block>
    </div>
  ),
};

// ── Matrix (Variant × Size) ────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix — Style × Size',
  render: () => {
    const variants: ButtonVariant[] = ['solid', 'tonal', 'outlined', 'plain'];
    const sizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                Style \ Size
              </th>
              {sizes.map(s => (
                <th key={s} style={{ padding: '8px 16px', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {variants.map(v => (
              <tr key={v} style={{ borderTop: '1px solid #F0F0F8' }}>
                <td style={{ padding: '12px 16px 12px 0', fontSize: 12, fontWeight: 600, color: '#55557A', verticalAlign: 'middle' }}>
                  {v}
                </td>
                {sizes.map(s => (
                  <td key={s} style={{ padding: '12px 16px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <Button variant={v} size={s}>{s}</Button>
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
