# Form Page Template

## 구조

```
┌──────────────────────────────────────────┐
│  Full-screen centered layout             │
│                                          │
│  ┌──────────────────────────────────┐   │
│  │  Logo / Brand                    │   │
│  │  Title + Subtitle                │   │
│  │                                  │   │
│  │  [Label] [Input]                 │   │
│  │  [Label] [Input - focused]       │   │
│  │  [Label] [Input - error]         │   │
│  │           └─ Error message       │   │
│  │  [Label] [Select]                │   │
│  │  [Label] [Textarea]              │   │
│  │                                  │   │
│  │  [Primary CTA Button]            │   │
│  │  Secondary link                  │   │
│  └──────────────────────────────────┘   │
└──────────────────────────────────────────┘
```

## Input 상태

| 상태 | Border 색 | Helper 색 |
|------|-----------|-----------|
| Default | `neutral-stroke-default` | `neutral-foreground-subtle-2` |
| Focus | `primary-stroke-default` | — |
| Error | `function-common-negative-default` | `function-common-negative-default` |
| Disabled | `neutral-stroke-subtle-1` | `neutral-foreground-disabled` |
| Success | `function-common-positive-default` | `function-common-positive-default` |

## 반응형 동작

| Breakpoint | 폼 너비 | 여백 |
|------------|---------|------|
| `< sm` | `100%` | `px-4` |
| `sm` | `420px` | 자동 |
| `md+` | `480px` | 자동 |

## Tailwind 구조

```tsx
// 페이지 컨테이너
<div className="min-h-screen flex items-center justify-center
                bg-neutral-background-default px-4 py-10">

  {/* 카드 */}
  <div className="w-full max-w-[480px] bg-neutral-background-base-basic
                  rounded-2xl border border-neutral-stroke-divider p-8 md:p-10
                  shadow-lg">

    {/* 필드 */}
    <div className="flex flex-col gap-4">

      {/* Input 그룹 */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-neutral-foreground-default">
          이메일 <span className="text-function-negative-default">*</span>
        </label>
        <input
          className="w-full px-3.5 py-2.5 rounded-lg text-sm
                     border-[1.5px] border-neutral-stroke-default
                     focus:border-primary-stroke-default
                     focus:outline-none bg-neutral-background-base-basic
                     text-neutral-foreground-default
                     placeholder:text-neutral-foreground-subtle-3"
        />
        {/* Error */}
        <p className="text-[11px] text-function-negative-default">
          올바른 이메일 형식을 입력해주세요.
        </p>
      </div>

    </div>

    {/* Submit */}
    <button className="w-full mt-6 py-3 rounded-lg bg-primary-background-default
                       text-white font-bold text-sm
                       shadow-md shadow-primary-500/20
                       hover:bg-primary-600 transition-colors">
      제출하기
    </button>

  </div>
</div>
```

## 컴포넌트 조합

- **Input**: `border focus:border-primary` + helper text
- **Button**: Primary (full width)
- **Error**: `text-function-negative-default` + icon
- **Success**: Snackbar/Toast 활용
