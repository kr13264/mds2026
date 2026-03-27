# Landing Page Template

## 섹션 구조

```
┌──────────────────────────────────────────┐
│  Navigation (sticky, blur backdrop)       │
├──────────────────────────────────────────┤
│  Hero Section                             │
│  - Eyebrow tag                            │
│  - H1 (gradient text)                    │
│  - Subtext                               │
│  - CTA Buttons                           │
│  - Hero Image / Mockup                   │
├──────────────────────────────────────────┤
│  Social Proof (Logo bar)                 │
├──────────────────────────────────────────┤
│  Feature Grid (3-column)                 │
├──────────────────────────────────────────┤
│  CTA Section (dark bg)                   │
├──────────────────────────────────────────┤
│  Footer                                   │
└──────────────────────────────────────────┘
```

## 반응형 동작

| Breakpoint | Layout |
|------------|--------|
| `< sm` | 단일 컬럼, 작은 폰트 |
| `sm ~ md` | 2컬럼 피처 그리드 |
| `lg+` | 3컬럼 피처 그리드, Hero 2단 |

## Tailwind 구조

```tsx
// Hero
<section className="flex flex-col items-center text-center
                    px-4 py-16 md:py-24 lg:py-32
                    bg-gradient-to-b from-[#F8F8FF] to-white">

  {/* Eyebrow */}
  <div className="inline-flex items-center gap-1.5 px-3 py-1
                  rounded-full bg-primary-background-subtle-1
                  border border-primary-background-decorative
                  text-xs font-semibold text-primary-foreground-default
                  mb-6">
    ✦ New Release
  </div>

  {/* Headline */}
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black
                 tracking-tight leading-none mb-5
                 bg-gradient-to-r from-neutral-foreground-default to-primary-background-default
                 bg-clip-text text-transparent">
    ...
  </h1>

  {/* CTA */}
  <div className="flex flex-col sm:flex-row gap-3">
    <button className="px-6 py-3 rounded-lg bg-primary-background-default
                       text-white font-bold shadow-lg shadow-primary-500/25">
      시작하기
    </button>
    <button className="px-6 py-3 rounded-lg border border-neutral-stroke-default
                       text-neutral-foreground-default font-semibold">
      더 알아보기
    </button>
  </div>
</section>

// Feature Grid
<section className="max-w-6xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    ...
  </div>
</section>
```

## 컴포넌트 사용

- **Eyebrow**: Chip 컴포넌트 또는 inline badge
- **CTA**: Button (Primary + Ghost)
- **Feature Card**: `rounded-xl border bg-white p-6`
- **Social Proof**: 흑백 로고 + `opacity-40 hover:opacity-70`
