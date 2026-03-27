import { forwardRef } from 'react';
import type { ButtonIconProps, ButtonIconVariant, ButtonIconSize, ButtonIconColor, ButtonIconShape } from './ButtonIcon.types';

// ── Spinner ────────────────────────────────────────────────────────────────
const Spinner = ({ dim }: { dim: number }) => (
  <svg className="animate-spin" width={dim} height={dim} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ── Size Map ───────────────────────────────────────────────────────────────
const sizeMap: Record<ButtonIconSize, { box: string; icon: string; iconDim: number; squareRadius: string }> = {
  sm:    { box: 'h-9  w-9',        icon: 'w-4 h-4', iconDim: 12, squareRadius: 'rounded-[6px]' },
  md:    { box: 'h-10 w-10',       icon: 'w-5 h-5', iconDim: 14, squareRadius: 'rounded-md'    },
  lg:    { box: 'h-11 w-11',       icon: 'w-5 h-5', iconDim: 14, squareRadius: 'rounded-md'    },
  xl:    { box: 'h-12 w-12',       icon: 'w-5 h-5', iconDim: 14, squareRadius: 'rounded-md'    },
  '2xl': { box: 'h-[52px] w-[52px]', icon: 'w-5 h-5', iconDim: 14, squareRadius: 'rounded-md' },
};

// ── Variant × Color Map ────────────────────────────────────────────────────
const variantColorClasses: Record<ButtonIconVariant, Record<ButtonIconColor, string>> = {
  solid: {
    primary:   'bg-primary-background-default text-white hover:opacity-90 active:opacity-80',
    secondary: 'bg-secondary-background-default text-white hover:opacity-90 active:opacity-80',
    danger:    'bg-function-negative-default text-white hover:opacity-90 active:opacity-80',
    neutral:   'bg-neutral-background-inverted-1 text-neutral-foreground-inverted-default hover:opacity-90 active:opacity-80',
  },
  tonal: {
    primary:   'bg-primary-background-subtle-1 text-primary-foreground-default hover:bg-primary-background-subtle-2 active:opacity-80',
    secondary: 'bg-secondary-background-subtle-1 text-secondary-foreground-default hover:opacity-90 active:opacity-80',
    danger:    'bg-function-negative-subtle text-function-negative-default hover:opacity-90 active:opacity-80',
    neutral:   'bg-neutral-background-alpha-2 text-neutral-foreground-default hover:bg-neutral-background-alpha-3 active:opacity-80',
  },
  outlined: {
    primary:   'bg-transparent border border-primary-stroke-default text-primary-foreground-default hover:bg-primary-background-subtle-1 active:bg-primary-background-subtle-2',
    secondary: 'bg-transparent border border-secondary-stroke-default text-secondary-foreground-default hover:bg-secondary-background-subtle-1 active:opacity-80',
    danger:    'bg-transparent border border-function-negative-default text-function-negative-default hover:bg-function-negative-subtle active:opacity-80',
    neutral:   'bg-transparent border border-neutral-stroke-default text-neutral-foreground-default hover:bg-neutral-background-alpha-1 active:bg-neutral-background-alpha-2',
  },
  plain: {
    primary:   'bg-transparent text-primary-foreground-default hover:bg-primary-background-subtle-1 active:bg-primary-background-subtle-2',
    secondary: 'bg-transparent text-secondary-foreground-default hover:bg-secondary-background-subtle-1 active:opacity-80',
    danger:    'bg-transparent text-function-negative-default hover:bg-function-negative-subtle active:opacity-80',
    neutral:   'bg-transparent text-neutral-foreground-default hover:bg-neutral-background-alpha-1 active:bg-neutral-background-alpha-2',
  },
};

const shapeRadius = (shape: ButtonIconShape, squareRadius: string) =>
  shape === 'round' ? 'rounded-full' : squareRadius;

// ── Component ──────────────────────────────────────────────────────────────
export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      icon,
      variant = 'solid',
      size = 'md',
      color = 'primary',
      shape = 'square',
      loading = false,
      fab = false,
      disabled,
      className = '',
      onClick,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    const { box, icon: iconCls, iconDim, squareRadius } = sizeMap[size];

    const classes = [
      'inline-flex items-center justify-center flex-shrink-0',
      'transition-all duration-150 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      variantColorClasses[variant][color],
      box,
      shapeRadius(shape, squareRadius),
      fab ? 'shadow-lg' : '',
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
        {loading ? (
          <Spinner dim={iconDim} />
        ) : (
          <span className={`${iconCls} flex items-center justify-center`} aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  },
);

ButtonIcon.displayName = 'ButtonIcon';
