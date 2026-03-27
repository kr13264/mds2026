# Dashboard Layout Template

## 구조

```
┌─────────────────────────────────────────┐
│           Top Navigation (56px)          │
├──────────┬──────────────────────────────┤
│          │                              │
│ Sidebar  │     Main Content Area        │
│ (220px)  │                              │
│          │  ┌──┐ ┌──┐ ┌──┐ ┌──┐       │
│ - Nav    │  │  │ │  │ │  │ │  │       │
│   Items  │  └──┘ └──┘ └──┘ └──┘       │
│          │  (Stat Cards)                │
│          │                              │
│          │  ┌────────────────────┐      │
│          │  │   Chart / Table    │      │
│          │  └────────────────────┘      │
│          │                              │
└──────────┴──────────────────────────────┘
```

## 반응형 동작

| Breakpoint | Sidebar | Content |
|------------|---------|---------|
| `< md`     | 숨김 (Drawer) | 전체 너비 |
| `md`       | 60px (아이콘만) | 나머지 |
| `lg+`      | 220px (전체) | 나머지 |

## Tailwind 클래스 구조

```tsx
// 최상위 레이아웃
<div className="flex min-h-screen bg-neutral-background-default">

  {/* Sidebar */}
  <aside className="hidden md:flex w-[60px] lg:w-[220px] flex-shrink-0
                    flex-col border-r border-neutral-stroke-divider
                    bg-neutral-background-base-basic">
    ...
  </aside>

  {/* Content */}
  <div className="flex flex-col flex-1 overflow-hidden">

    {/* Top Nav */}
    <header className="h-14 border-b border-neutral-stroke-divider
                       bg-neutral-background-base-basic flex items-center
                       justify-between px-6">
      ...
    </header>

    {/* Main */}
    <main className="flex-1 overflow-y-auto p-6 lg:p-8">

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        ...
      </div>

      {/* Chart Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">차트</div>
        <div>사이드 패널</div>
      </div>

    </main>
  </div>
</div>
```

## 컴포넌트 조합 예시

- **Stat Card**: `bg-neutral-background-base-basic rounded-lg border`
- **Chart**: Recharts 또는 Chart.js + BON UI 컬러 토큰
- **Table**: `<table>` + `border-neutral-stroke-divider`
- **Sidebar Item**: active → `bg-primary-background-subtle-1 text-primary-foreground-default`
