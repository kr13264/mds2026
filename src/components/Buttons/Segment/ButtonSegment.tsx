import type { ButtonSegmentProps, ButtonSegmentSize, ButtonSegmentShape } from './ButtonSegment.types';

// ── Size Map ───────────────────────────────────────────────────────────────
const sizeClasses: Record<ButtonSegmentSize, string> = {
  sm: 'h-8  text-sm     px-3',
  md: 'h-10 text-[15px] px-4',
  lg: 'h-11 text-[15px] px-4',
};

const containerRadius = (shape: ButtonSegmentShape) =>
  shape === 'round' ? 'rounded-full' : 'rounded-lg';

const itemRadius = (shape: ButtonSegmentShape) =>
  shape === 'round' ? 'rounded-full' : 'rounded-md';

// ── Component ──────────────────────────────────────────────────────────────
export const ButtonSegment = ({
  options,
  value,
  onChange,
  shape = 'square',
  type = 'half',
  size = 'md',
  disabled = false,
  className = '',
}: ButtonSegmentProps) => {
  return (
    <div
      className={[
        'inline-flex p-1 gap-0.5',
        'bg-neutral-background-alpha-2',
        containerRadius(shape),
        type === 'full' ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="group"
    >
      {options.map((opt) => {
        const isSelected = opt.value === value;
        const isItemDisabled = disabled || opt.disabled;

        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={isItemDisabled}
            onClick={() => !isItemDisabled && onChange(opt.value)}
            className={[
              'flex items-center justify-center',
              'font-semibold leading-none select-none whitespace-nowrap',
              'transition-all duration-150 ease-out',
              'focus-visible:outline-none',
              sizeClasses[size],
              itemRadius(shape),
              type === 'full' ? 'flex-1' : '',
              isSelected
                ? 'bg-white shadow-sm text-neutral-foreground-default'
                : 'bg-transparent text-neutral-foreground-subtle-1 hover:text-neutral-foreground-default',
              isItemDisabled
                ? 'opacity-40 cursor-not-allowed pointer-events-none'
                : 'cursor-pointer',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

ButtonSegment.displayName = 'ButtonSegment';
