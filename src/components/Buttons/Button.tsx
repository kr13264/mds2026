import { forwardRef } from 'react';
import type { ButtonProps, ButtonVariant, ButtonSize, ButtonColor } from './Button.types';

// ── Spinner ────────────────────────────────────────────────────────────────
const Spinner = ({ size }: { size: ButtonSize }) => {
  const dim = ['xs', 'sm'].includes(size) ? 12 : 14;
  return (
    <svg
      className="animate-spin"
      width={dim}
      height={dim}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
      <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

// ── Size Map ───────────────────────────────────────────────────────────────
// 위키 Measurement 기준 (height / text / icon / padding / radius)
const sizeClasses: Record<ButtonSize, string> = {
  xs:  'h-7 px-[10px] text-xs   rounded-[6px] gap-0.5',
  sm:  'h-9 px-3      text-sm   rounded-[6px] gap-1',
  md:  'h-10 px-3     text-[15px] rounded-md gap-1',
  lg:  'h-11 px-4     text-[15px] rounded-md gap-1',
  xl:  'h-12 px-4     text-base rounded-md gap-1.5',
  '2xl': 'h-[52px] px-5 text-base rounded-md gap-1.5',
};

const iconSizeClasses: Record<ButtonSize, string> = {
  xs:    'w-4 h-4',   // 최대 16px
  sm:    'w-4 h-4',   // 최대 16px
  md:    'w-5 h-5',   // 최대 20px
  lg:    'w-5 h-5',
  xl:    'w-5 h-5',
  '2xl': 'w-5 h-5',
};

// ── Variant × Color Map ────────────────────────────────────────────────────
type ColorKey = ButtonColor;
type VariantKey = ButtonVariant;

const variantColorClasses: Record<VariantKey, Record<ColorKey, string>> = {
  // solid: 강한 강조. 주요 CTA (구매, 예약 등)
  solid: {
    primary: [
      'bg-primary-background-default text-white',
      'hover:bg-primary-600 active:bg-primary-700',
      'focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
    ].join(' '),
    secondary: [
      'bg-secondary-background-default text-white',
      'hover:opacity-90 active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2',
    ].join(' '),
    danger: [
      'bg-function-negative-default text-white',
      'hover:opacity-90 active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2',
    ].join(' '),
    neutral: [
      'bg-neutral-background-inverted-1 text-neutral-foreground-inverted-default',
      'hover:opacity-90 active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2',
    ].join(' '),
  },

  // tonal: 중간 강조. 보조 액션
  tonal: {
    primary: [
      'bg-primary-background-subtle-1 text-primary-foreground-default',
      'hover:bg-primary-background-subtle-2 active:bg-primary-100',
      'focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
    ].join(' '),
    secondary: [
      'bg-secondary-background-subtle-1 text-secondary-foreground-default',
      'hover:opacity-90 active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2',
    ].join(' '),
    danger: [
      'bg-function-negative-subtle text-function-negative-default',
      'hover:opacity-90 active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2',
    ].join(' '),
    neutral: [
      'bg-neutral-background-alpha-2 text-neutral-foreground-default',
      'hover:bg-neutral-background-alpha-3 active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2',
    ].join(' '),
  },

  // outlined: 약한 강조. 선택적 액션
  outlined: {
    primary: [
      'bg-transparent border border-primary-stroke-default text-primary-foreground-default',
      'hover:bg-primary-background-subtle-1 active:bg-primary-background-subtle-2',
      'focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
    ].join(' '),
    secondary: [
      'bg-transparent border border-secondary-stroke-default text-secondary-foreground-default',
      'hover:bg-secondary-background-subtle-1 active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2',
    ].join(' '),
    danger: [
      'bg-transparent border border-function-negative-default text-function-negative-default',
      'hover:bg-function-negative-subtle active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2',
    ].join(' '),
    neutral: [
      'bg-transparent border border-neutral-stroke-default text-neutral-foreground-default',
      'hover:bg-neutral-background-alpha-1 active:bg-neutral-background-alpha-2',
      'focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2',
    ].join(' '),
  },

  // plain: 강조 없음. 최소한의 시각적 무게
  plain: {
    primary: [
      'bg-transparent text-primary-foreground-default',
      'hover:bg-primary-background-subtle-1 active:bg-primary-background-subtle-2',
      'focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
    ].join(' '),
    secondary: [
      'bg-transparent text-secondary-foreground-default',
      'hover:bg-secondary-background-subtle-1 active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2',
    ].join(' '),
    danger: [
      'bg-transparent text-function-negative-default',
      'hover:bg-function-negative-subtle active:opacity-80',
      'focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2',
    ].join(' '),
    neutral: [
      'bg-transparent text-neutral-foreground-default',
      'hover:bg-neutral-background-alpha-1 active:bg-neutral-background-alpha-2',
      'focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2',
    ].join(' '),
  },
};

// ── Component ──────────────────────────────────────────────────────────────
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'md',
      color = 'primary',
      loading = false,
      iconHead,
      iconTail,
      count,
      thumbnail,
      fullWidth = false,
      fab = false,
      disabled,
      children,
      className = '',
      onClick,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const classes = [
      // Base
      'inline-flex items-center justify-center',
      'font-semibold leading-none select-none whitespace-nowrap',
      'transition-all duration-150 ease-out',
      'focus-visible:outline-none',
      // Variant × Color
      variantColorClasses[variant][color],
      // Size
      sizeClasses[size],
      // FAB shadow
      fab ? 'shadow-lg' : '',
      // Full width
      fullWidth ? 'w-full' : '',
      // Disabled
      isDisabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading}
        onClick={isDisabled ? undefined : onClick}
        {...props}
      >
        {/* Thumbnail */}
        {thumbnail && !loading && (
          <img
            src={thumbnail}
            alt=""
            aria-hidden="true"
            className={`${iconSizeClasses[size]} rounded-sm object-cover flex-shrink-0`}
          />
        )}

        {/* iconHead / Spinner */}
        {loading ? (
          <span className={`${iconSizeClasses[size]} flex items-center justify-center flex-shrink-0`}>
            <Spinner size={size} />
          </span>
        ) : iconHead ? (
          <span className={`${iconSizeClasses[size]} flex items-center justify-center flex-shrink-0`} aria-hidden="true">
            {iconHead}
          </span>
        ) : null}

        {/* Label */}
        {children && (
          <span className={loading ? 'opacity-70' : ''}>{children}</span>
        )}

        {/* Count badge */}
        {count !== undefined && !loading && (
          <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-white/20 text-[10px] font-bold tabular-nums">
            {count > 99 ? '99+' : count}
          </span>
        )}

        {/* iconTail */}
        {!loading && iconTail && (
          <span className={`${iconSizeClasses[size]} flex items-center justify-center flex-shrink-0`} aria-hidden="true">
            {iconTail}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
