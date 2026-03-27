# SKILL.md — MDS 공통 원칙 & AI 생성 기준

> 이 문서는 AI 코드 생성 시 항상 참조해야 할 **제약사항과 기준**을 정의합니다.
> 컴포넌트를 요청할 때 이 컨텍스트가 자동 적용됩니다.

---

## 1. 프로젝트 스택

| 항목 | 내용 |
|------|------|
| UI 프레임워크 | React 18 + TypeScript |
| 문서화 도구 | Storybook 8.x |
| 스타일링 | Tailwind CSS v3 |
| 컴포넌트 경로 | `src/components/` |
| Story 파일명 | `ComponentName.stories.tsx` |
| 패키지 매니저 | pnpm |

---

## 2. 디자인 토큰

```ts
// tokens.ts (참조용)
export const tokens = {
  color: {
    primary: '#6366F1',
  },
  borderRadius: {
    sm: '4px',   // rounded-sm
    md: '8px',   // rounded-md
    lg: '12px',  // rounded-lg
  },
  font: {
    family: 'Pretendard',
  },
} as const;
```

---

## 3. AI 생성 제약사항 (항상 준수)

### ✅ 필수 규칙
- **TypeScript** 사용 필수. `any` 타입 금지
- **Tailwind CSS** 클래스 사용. `style={{ }}` inline 스타일 금지
- **반응형 웹** 필수: `sm:` `md:` `lg:` `xl:` breakpoint 적극 활용
- **BON UI 컬러 토큰** 우선 적용 (아래 참조)
- 컴포넌트는 `src/components/` 하위에 위치
- Story 파일은 `src/stories/components/` 하위에 위치
- `export default` + named export `Story` 방식 준수

### ❌ 금지 사항
- `style={{ }}` inline 스타일 (예외: 동적 값 필요시에만 허용)
- `any`, `unknown` 타입 무분별 사용
- `!important` CSS 사용
- 하드코딩된 HEX 컬러값 (BON UI CSS 변수 또는 Tailwind 토큰 사용)
- `px` 단위 단독 사용 (Tailwind spacing 시스템 사용)

### 📐 반응형 브레이크포인트
```
sm:  640px  — 모바일 (세로)
md:  768px  — 태블릿
lg:  1024px — 데스크탑 소형
xl:  1280px — 데스크탑
2xl: 1536px — 와이드
```

---

## 4. Story 파일 템플릿

```tsx
// ComponentName.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from '@/components/ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'ghost'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const Responsive: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="p-4 sm:p-6 md:p-8">
      <ComponentName>Responsive Example</ComponentName>
    </div>
  ),
};
```

---

## 5. BON UI 컬러 참조

BON UI 컬러 시스템은 **CSS 변수**로 제공됩니다.
`src/index.css`에 fallback 값이 정의되어 있으며, 실제 프로젝트에서는 `@bonui/styles`를 설치해야 합니다.

### 설치

```bash
# BON UI 패키지 설치 (내부 레지스트리 필요)
pnpm install @bonui/react @bonui/styles

# Storybook 초기 세팅 (최초 1회)
pnpm dlx @storybook/cli sb init
```

### BON UI React 컴포넌트 사용 예시

```tsx
// BonUISwitch.tsx
import './BonUISwitch.css';
import { Switch, SwitchControl, SwitchHandle } from '@bonui/react';
import '@bonui/styles';

function BonUISwitch() {
  return (
    <Switch>
      <SwitchControl>
        <SwitchHandle />
      </SwitchControl>
    </Switch>
  );
}

export default BonUISwitch;
```

### CSS 변수 → Tailwind 클래스 매핑

| CSS 변수 | Tailwind 클래스 | 용도 |
|----------|----------------|------|
| `--neutral-background-default` | `bg-neutral-background-default` | 기본 배경 |
| `--neutral-background-base-basic` | `bg-neutral-background-base-basic` | 카드/패널 배경 |
| `--neutral-background-raised-1` | `bg-neutral-background-raised-1` | 올라온 요소 배경 |
| `--neutral-foreground-default` | `text-neutral-foreground-default` | 기본 텍스트 |
| `--neutral-foreground-subtle-1` | `text-neutral-foreground-subtle-1` | 보조 텍스트 |
| `--neutral-foreground-disabled` | `text-neutral-foreground-disabled` | 비활성 텍스트 |
| `--neutral-stroke-default` | `border-neutral-stroke-default` | 기본 테두리 |
| `--neutral-stroke-divider` | `border-neutral-stroke-divider` | 구분선 |
| `--primary-background-default` | `bg-primary-background-default` | Primary 배경 |
| `--primary-foreground-default` | `text-primary-foreground-default` | Primary 텍스트 |
| `--primary-foreground-inverted` | `text-primary-foreground-inverted` | Primary 반전 텍스트 |
| `--function-common-positive-default` | `text-function-positive-default` | 성공/긍정 |
| `--function-common-negative-default` | `text-function-negative-default` | 오류/부정 |
| `--function-common-attention-default` | `text-function-attention-default` | 경고 |
| `--function-common-informative-default` | `text-function-informative-default` | 정보 |

### 직접 CSS 변수 사용 (동적 스타일 필요 시)

```tsx
// 동적 색상이 필요한 경우에만 허용
<div style={{ backgroundColor: 'var(--neutral-background-raised-1)' }}>
  ...
</div>
```

---

## 6. 컴포넌트 디렉토리 구조

```
src/
├── components/
│   ├── Badges/
│   │   ├── index.ts
│   │   ├── Badges.tsx
│   │   └── Badges.types.ts
│   ├── Buttons/
│   │   ├── index.ts
│   │   ├── Button.tsx
│   │   └── Button.types.ts
│   └── ...
└── stories/
    ├── foundation/
    ├── icon/
    ├── components/
    └── templates/
```

---

## 7. Story 가이드 (실제 적용된 패턴)

> Profile/Vertical, Profile/Horizontal, Image, Buttons 에서 확립된 실제 규칙입니다.
> 새 컴포넌트 추가 시 반드시 이 패턴을 따릅니다.

### 사이드바 구조 (서브 컴포넌트 있는 경우)

서브 컴포넌트가 있는 경우 사이드바는 반드시 아래 형태를 따릅니다.

서브 컴포넌트가 있는 경우 사이드바는 반드시 아래 형태를 따릅니다.

```
{Name}
  ├── Docs      ← 항상 맨 위 (index.stories.tsx autodocs)
  ├── {Sub1}
  ├── {Sub2}
  ├── {Sub3}
  └── Overview  ← 항상 맨 뒤 (index.stories.tsx)
```

예시 (Buttons):

```
Buttons
  ├── Docs      ← 항상 맨 위 (index.stories.tsx autodocs)
  ├── Basic
  ├── Icon
  ├── Segment
  ├── Group
  └── Overview  ← 항상 맨 뒤 (index.stories.tsx)
```

- `Docs`는 항상 **맨 위** — `index.stories.tsx`에 `tags: ['autodocs']` + `title: 'Components/{Name}'`
- `Overview` story는 `index.stories.tsx` 안에 정의하되 **맨 뒤**에 위치
- 서브 컴포넌트는 `title: 'Components/{Name}/{Sub}'`로 하위에 표시

### 파일 구조 (서브 컴포넌트 있는 경우)

```
src/components/{Name}/{Sub}/
  {Sub}.tsx
  {Sub}.types.ts
  index.ts
src/components/{Name}/
  index.ts                    ← 모든 서브 re-export
src/stories/components/{Name}/
  index.stories.tsx           ← title: 'Components/{Name}' — Docs + Overview
  {Sub}.stories.tsx           ← title: 'Components/{Name}/{Sub}'
```

### storySort 설정 (.storybook/preview.tsx)

서브 컴포넌트를 추가할 때마다 `preview.tsx`의 `storySort.order`에 해당 그룹을 등록합니다.
`Docs`가 항상 맨 앞에 오도록 명시적으로 지정합니다.

```ts
// .storybook/preview.tsx
// ⚠️ 배열은 직전 항목의 children — ['Parent', [children]] 형태가 아님
storySort: {
  order: [
    'Home',
    'Icon',
    'Components',
    ['{Name}', ['Docs', '{Sub1}', '{Sub2}', 'Overview', '*'], '*'],
    'Templates',
    'Foundation',
    '*',
  ],
},

// 예시 (Buttons):
// 'Components',
// ['Buttons', ['Docs', 'Basic', 'Icon', 'Segment', 'Group', 'Overview', '*'], '*'],
```

### meta 필수 설정

```tsx
const meta: Meta<typeof Component> = {
  title: 'Components/{Name}/{Sub}',
  component: Component,
  tags: ['autodocs'],           // ← 반드시 포함
  parameters: { layout: 'centered' },
  // docs.description.component: 마크다운 설명
};
```

### docs description 형식

```
컴포넌트 설명 문장.

---

<div style="margin-bottom:30px"></div>   ← --- 아래 30px 공백 필수

### Size
| Size | ... |
...

### 코드 예시
```tsx
...
```
```

### 레이아웃 헬퍼 (모든 스토리 파일 상단)

```tsx
const Row = ({ children, gap = 24 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
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
```

### 스토리 구성 순서 (고정)

| 순서 | export 명 | name 값 | 내용 |
|------|-----------|---------|------|
| 1 | `Playground` | (생략) | 모든 prop 조작 가능 |
| 2 | `Sizes` | `'Size'` | Measurement 표 + Usage 시각화 |
| 3 | `Emphasis` | `'Emphasis'` | false/true 비교 |
| 4 | `Selected` | `'Selected'` | false/true 비교 (해당 시) |
| 5 | `Contents` | `'Contents'` | 슬롯/prop별 케이스 |
| 6 | `Matrix` | `'Matrix'` | Size × 기타 조합 전체 표 |

### Story name 규칙

- `—` 뒤 옵션 목록 **제거**
- ❌ `'Size — default · small'`  ✅ `'Size'`

### 컬러 토큰 (inline style 사용 시)

| 용도 | 값 |
|------|-----|
| 기본 텍스트 | `#111122` |
| 서브 텍스트 | `#55557A` |
| 비활성 레이블 | `#9999B8` |
| disabled | `#BBBBCC` |
| 구분선 | `#E4E4EE` |
| 옅은 행 구분 | `#F0F0F8` |
| 배경 | `#F5F5F8` |
| Primary | `#03A94D` |
| Secondary (파란색) | `#3283FD` |

---

## 8. 참고 링크

- BON UI GitHub: https://oss.navercorp.com/bonui/bonui
- Storybook 공식: https://storybook.js.org
- Tailwind CSS: https://tailwindcss.com
- Pretendard 폰트: https://github.com/orioncactus/pretendard
