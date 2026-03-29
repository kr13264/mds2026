# SKILL.md — MDS 공통 원칙 & AI 생성 기준

> AI 코드 생성 시 항상 참조해야 할 **제약사항과 기준**입니다.

---

## 1. 프로젝트 스택

| 항목 | 내용 |
|------|------|
| UI 프레임워크 | React 18 + TypeScript |
| 문서화 도구 | Storybook 8.x |
| 스타일링 | **Tailwind CSS v4** + `@bonui/styles 1.55.0` |
| 패키지 매니저 | pnpm |
| 컴포넌트 경로 | `src/components/` |
| Story 경로 | `src/stories/` |
| 글로벌 CSS | `src/index.css` |

---

## 2. BON UI 토큰 사용 원칙

`@bonui/styles`가 설치되어 있으며 `src/index.css`에서 `@import "@bonui/styles"`로 연결되어 있습니다.
모든 토큰은 **Tailwind 클래스** 또는 **CSS 변수(`var(--color-*)`)**로 사용합니다.

### 컬러 — Tailwind 클래스

| 용도 | Tailwind 클래스 |
|------|----------------|
| 기본 배경 | `bg-neutral-background-default` |
| 카드/패널 배경 | `bg-neutral-background-base-basic` |
| Raised 배경 | `bg-neutral-background-raised-1` |
| Disabled 배경 | `bg-neutral-background-disabled` |
| 기본 텍스트 | `text-neutral-foreground-default` |
| 보조 텍스트 | `text-neutral-foreground-subtle-1` |
| 비활성 텍스트 | `text-neutral-foreground-disabled` |
| 반전 텍스트 | `text-neutral-foreground-inverted-default` |
| 기본 테두리 | `border-neutral-stroke-default` |
| 구분선 | `border-neutral-stroke-divider` |
| Primary 배경 | `bg-primary-background-default` |
| Primary 텍스트 | `text-primary-foreground-default` |
| Primary 반전 | `text-primary-foreground-inverted` |
| Primary 테두리 | `border-primary-stroke-default` |
| Secondary 배경 | `bg-secondary-background-default` |
| Secondary 텍스트 | `text-secondary-foreground-default` |
| 성공 | `text-function-positive-default` / `bg-function-positive-subtle` |
| 오류 | `text-function-negative-default` / `bg-function-negative-subtle` |
| 경고 | `text-function-attention-default` / `bg-function-attention-subtle` |
| 정보 | `text-function-informative-default` / `bg-function-informative-subtle` |

### 컬러 — inline style 사용 시 CSS 변수

> Tailwind 클래스로 표현 불가한 경우에만 허용

```tsx
// ✅ CSS 변수는 반드시 --color-* 접두사 사용
style={{ backgroundColor: 'var(--color-neutral-background-raised-1)' }}
style={{ color: 'var(--color-neutral-foreground-default)' }}
style={{ borderColor: 'var(--color-neutral-stroke-divider)' }}

// ❌ 구버전 변수명 사용 금지
style={{ backgroundColor: 'var(--neutral-background-raised-1)' }}  // ❌
```

### 컬러 — inline style 하드코딩 허용값 (스토리/문서용만)

| 용도 | 값 |
|------|-----|
| 기본 텍스트 | `#111122` |
| 보조 텍스트 | `#55557A` |
| 비활성 레이블 | `#9999B8` |
| disabled | `#BBBBCC` |
| 구분선 | `#E4E4EE` |
| 배경 | `#F5F5F8` |
| Primary (green) | `#03A94D` |
| Primary 배경 (연두) | `#E6F9EE` |
| Secondary (blue) | `#3283FD` |

### 타이포그래피

```tsx
// font-size: text-10 ~ text-40
<p className="text-14 leading-20 font-normal" />
<h1 className="text-24 leading-32 font-bold tracking-bon-tighter" />

// 사용 가능한 font-size: 10 11 12 13 14 15 16 17 18 19 20 22 24 26 28 32 40
// 사용 가능한 leading:   12 13 15 16 17 18 19 20 21 22 23 24 25 26 27 28 32 34 36 40 48
// letter-spacing: tracking-bon-tight(-0.3px) · tracking-bon-tighter(-0.4px) · tracking-bon-tightest(-1px)
```

### 스페이싱

```tsx
// p-{token}, m-{token}, gap-{token}, w-{token}, h-{token} 모두 동작
<div className="p-m gap-xs" />   // p-m = 12px, gap-xs = 8px

// 토큰: none(0) 4xs(2px) 3xs(4px) 2xs(6px) xs(8px) s(10px) m(12px)
//        l(16px) xl(20px) 2xl(24px) 3xl(28px) 4xl(32px) 5xl(36px)
```

### Border Radius

```tsx
rounded-sm    // 4px  (--radius-2xs)
rounded       // 6px  (--radius-xs)
rounded-md    // 8px  (--radius-s)
rounded-lg    // 12px (--radius-m)
rounded-xl    // 20px (--radius-xl)
rounded-2xl   // 24px (--radius-2xl)
rounded-3xl   // 28px (--radius-3xl)
rounded-full  // 999px
```

### Shadow

```tsx
<div className="shadow" />   // --shadow-light-neutral-default
```

### Gradient

```tsx
// from-* / via-* / to-* 로 사용
<div className="bg-gradient-to-br from-gradient-ai-1 to-gradient-ai-3" />

// 사용 가능한 gradient 토큰:
// gradient-ai-{1,2,3}
// gradient-green-dot-{1,2,3}
// gradient-n-logo-{1,2}
// gradient-placeholder-{1,2}
```

### 다크 모드

```tsx
// .dark 클래스를 html/body에 적용하면 자동 전환
<div className="bg-neutral-background-default dark:bg-neutral-background-inverted-1" />
```

---

## 3. AI 생성 제약사항

### ✅ 필수

- **TypeScript** 사용 필수. `any` 타입 금지
- **Tailwind CSS v4** 클래스 우선 사용
- BON UI 토큰 우선 — 하드코딩 HEX 금지 (스토리/문서용 제외)
- 컴포넌트는 `src/components/` 하위
- Story는 `src/stories/` 하위

### ❌ 금지

- `style={{ }}` inline 스타일 (동적 값 필요 시에만 예외)
- 구버전 CSS 변수 `var(--neutral-*)` `var(--primary-*)` → `var(--color-*)` 사용
- `@tailwind base/components/utilities` 지시어 (v3 문법, v4에서 사용 불가)
- `tailwind.config.js` 생성 (v4는 `@theme` in CSS 방식)
- `any`, `unknown` 무분별 사용
- `!important` CSS

### 📐 반응형 브레이크포인트

```
sm:  640px  — 모바일 (가로)
md:  768px  — 태블릿
lg:  1024px — 데스크탑 소형
xl:  1280px — 데스크탑
2xl: 1536px — 와이드
```

---

## 4. Story 파일 템플릿

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from '@/components/ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: { children: 'Label' },
};
```

---

## 5. 컴포넌트 디렉토리 구조

```
src/
├── components/
│   └── {Name}/
│       ├── {Sub}/
│       │   ├── {Sub}.tsx
│       │   ├── {Sub}.types.ts
│       │   └── index.ts
│       └── index.ts          ← 서브 컴포넌트 re-export
└── stories/
    ├── foundation/
    ├── icon/
    ├── components/
    │   └── {Name}/
    │       ├── index.stories.tsx   ← title: 'Components/{Name}' (Docs + Overview)
    │       └── {Sub}.stories.tsx   ← title: 'Components/{Name}/{Sub}'
    └── templates/
```

---

## 6. Story 가이드

### 사이드바 구조 (서브 컴포넌트 있는 경우)

```
{Name}
  ├── Docs      ← index.stories.tsx (autodocs)
  ├── {Sub1}
  ├── {Sub2}
  └── Overview  ← index.stories.tsx 맨 뒤
```

### storySort 설정 (.storybook/preview.tsx)

```ts
storySort: {
  order: [
    'Home', 'Foundation', 'Icon',
    'Components',
    ['{Name}', ['Docs', '{Sub1}', '{Sub2}', 'Overview', '*'], '*'],
    'Templates', '*',
  ],
},
```

### 스토리 구성 순서

| 순서 | export 명 | 내용 |
|------|-----------|------|
| 1 | `Playground` | 모든 prop 조작 가능 |
| 2 | `Sizes` | 사이즈별 시각화 |
| 3 | `Emphasis` | 강조 상태 비교 (false/true 비교) |
| 4 | `Selected` | 선택 상태 비교 (해당 컴포넌트만) |
| 5 | `Contents` | 슬롯/prop별 케이스 |
| 6 | `Matrix` | Size × 상태 조합 전체 표 |

### Story name 규칙

`name` 속성에서 `—` 뒤 옵션 목록 **제거** — 단독 명사만 사용

```tsx
// ❌ 금지
{ name: 'Size — default · small' }

// ✅ 올바른 형식
{ name: 'Size' }
{ name: 'Emphasis' }
{ name: 'Selected' }
```

### Docs description 형식 (meta.parameters.docs)

```tsx
parameters: {
  layout: 'centered',
  docs: {
    description: {
      component: `
첫 줄: 컴포넌트 설명

---
<div style="margin-bottom:30px"></div>

### Size

| Size | 설명 |
|------|------|
| default | 기본 크기 |
| small   | 소형     |

### Emphasis

| Emphasis | 설명 |
|----------|------|
| false    | 기본 |
| true     | 강조 |

\`\`\`tsx
// 사용 예시
<ComponentName size="default" emphasis={false} />
\`\`\`
      `,
    },
  },
},
```

- `---` 구분선 다음 반드시 `<div style="margin-bottom:30px"></div>` 30px 공백
- 섹션별 pipe table 사용 (`### Size`, `### Emphasis` 등)
- 마지막에 사용 예시 코드블록 포함

### 레이아웃 헬퍼 (스토리 파일 공통)

```tsx
const Row = ({ children, gap = 24 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#9999B8', margin: '0 0 4px' }}>{label}</p>
    {desc && <p style={{ fontSize: 12, color: '#55557A', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);
```

---

## 7. 스토리 UI 배치 규칙

### 테이블 배경색 (절대 규칙)

| 영역 | 토큰 |
|------|------|
| `<thead>` 헤더 행 | `var(--color-neutral-background-raised-1)` |
| `<tbody>` 내용 행 | `var(--color-neutral-background-default)` |
| 테두리 | `var(--color-neutral-stroke-divider)` |

```tsx
// ✅ 올바른 테이블 스타일
<thead>
  <tr style={{ background: 'var(--color-neutral-background-raised-1)' }}>
    ...
  </tr>
</thead>
<tbody>
  <tr style={{ background: 'var(--color-neutral-background-default)' }}>
    ...
  </tr>
</tbody>
```

### 카드 / 배너 배경색

| 영역 | 토큰 |
|------|------|
| 정보 배너 (텍스트 박스) | `var(--color-neutral-background-separated-1)` |
| 아이콘 카드, 일반 컨텐츠 카드 | `var(--color-neutral-background-default)` |
| 페이지 전체 배경 | `var(--color-neutral-background-default)` |

> ⚠️ 라이트/다크 모드 모두 대응해야 하므로 **hex 하드코딩 절대 금지**. 반드시 `var(--color-*)` 사용.

---

## 8. Storybook 셋업 주의사항

### 절대 금지

- **`vite.config.ts` 생성 금지** — `@vitejs/plugin-react`는 ESM-only로 Storybook 번들 시 esbuild CJS 오류 발생. `viteFinal` in `.storybook/main.ts`로 모든 설정 처리.
- **`@tailwind base/components/utilities` 지시어 금지** — Tailwind v3 문법, v4 미지원

### 필수 패키지

`package.json` devDependencies에 `"storybook": "^8.x.x"` 포함 필요 — 없으면 `storybook/internal/preview/runtime` 미해결 오류 발생

### 서버 재시작 전 체크

```bash
# 캐시 삭제 (stale 이슈 해결)
rm -rf node_modules/.cache

# 기존 프로세스 종료 (포트 충돌 방지)
lsof -i :6006 -i :6007  # 확인 후 kill
```

### @ alias 설정 (`.storybook/main.ts`)

`viteFinal`에서 `process.cwd()` 사용 (not `__dirname`). `mergeConfig`나 `vite-tsconfig-paths` **사용 금지** — dev 모드에서 적용 불안정.

```ts
viteFinal(config) {
  const src = path.resolve(process.cwd(), 'src');
  config.resolve = config.resolve ?? {};
  const alias = config.resolve.alias;
  if (Array.isArray(alias)) {
    alias.push({ find: '@', replacement: src });
  } else {
    config.resolve.alias = { ...(alias as Record<string, string> ?? {}), '@': src };
  }
  return config;
},
```

---

## 9. 참고

- Storybook 로컬: `http://localhost:6006/`
- Tailwind CSS v4 docs: https://tailwindcss.com
- Pretendard: https://github.com/orioncactus/pretendard
