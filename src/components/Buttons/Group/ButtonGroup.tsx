import type { ButtonGroupProps, ButtonGroupSize, ButtonGroupShape } from './ButtonGroup.types';

// ── Size Map ───────────────────────────────────────────────────────────────
const sizeClasses: Record<ButtonGroupSize, string> = {
  sm: 'h-9  px-3 text-sm     gap-1',
  md: 'h-10 px-4 text-[15px] gap-1',
  lg: 'h-11 px-4 text-[15px] gap-1',
};

const radiusClasses: Record<ButtonGroupShape, string> = {
  square: 'rounded-md',
  round:  'rounded-full',
};

// ── Component ──────────────────────────────────────────────────────────────
export const ButtonGroup = ({
  cancelLabel = '취소',
  confirmLabel = '확인',
  onCancel,
  onConfirm,
  shape = 'square',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
}: ButtonGroupProps) => {
  const base = [
    'inline-flex items-center justify-center',
    'font-semibold leading-none select-none whitespace-nowrap',
    'transition-all duration-150 ease-out focus-visible:outline-none',
    sizeClasses[size],
    radiusClasses[shape],
  ].join(' ');

  const cancelCls = [
    base,
    'bg-transparent border border-neutral-stroke-default text-neutral-foreground-default',
    'hover:bg-neutral-background-alpha-1 active:bg-neutral-background-alpha-2',
    fullWidth ? 'flex-1' : '',
    disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
  ]
    .filter(Boolean)
    .join(' ');

  const confirmCls = [
    base,
    'bg-primary-background-default text-white',
    'hover:opacity-90 active:opacity-80',
    fullWidth ? 'flex-1' : '',
    disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={[
        'inline-flex gap-2',
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <button
        type="button"
        className={cancelCls}
        disabled={disabled}
        onClick={onCancel}
      >
        {cancelLabel}
      </button>
      <button
        type="button"
        className={confirmCls}
        disabled={disabled}
        onClick={onConfirm}
      >
        {confirmLabel}
      </button>
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';
