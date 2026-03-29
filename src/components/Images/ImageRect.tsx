import type { ImageRectProps, ImageRectRatio, ImageRectOpacity, ImageRectShadow, ImageRectFit } from './ImageRect.types';

// ── 비율 → aspect-ratio class ──────────────────────────────────────────────
const ratioClasses: Record<ImageRectRatio, string> = {
  '1:1':   'aspect-square',
  '16:9':  'aspect-video',
  '3:2':   'aspect-[3/2]',
  '3:4':   'aspect-[3/4]',
  '3:4.5': 'aspect-[2/3]',    // 3:4.5 ≈ 2:3
  '3:5':   'aspect-[3/5]',
  'noFix': '',
};

// ── 딤 레이어 opacity ──────────────────────────────────────────────────────
const dimClasses: Record<ImageRectOpacity, string> = {
  'none': 'opacity-0',
  '3%':   'opacity-[0.03]',
  '40%':  'opacity-40',
};

// ── 그림자 그라디언트 (인라인 style 불가피 — 임의 그라디언트) ──────────────
const shadowGradient: Record<ImageRectShadow, string[]> = {
  'none':   [],
  'up':     ['linear-gradient(to bottom, rgba(0,0,0,.60) 0%, transparent 60%)'],
  'down':   ['linear-gradient(to top, rgba(0,0,0,.60) 0%, transparent 60%)'],
  'up&down': [
    'linear-gradient(to bottom, rgba(0,0,0,.60) 0%, transparent 60%)',
    'linear-gradient(to top,   rgba(0,0,0,.60) 0%, transparent 60%)',
  ],
};

// ── NoImage 아이콘 ─────────────────────────────────────────────────────────
const NoImageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="rgba(0,0,0,.06)" />
    <path
      d="M8 22l6-6 4 4 3-3 5 5"
      stroke="rgba(0,0,0,.22)" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="11.5" cy="12.5" r="2" stroke="rgba(0,0,0,.22)" strokeWidth="1.5" />
  </svg>
);

// ── PlaceHolder 스켈레톤 ───────────────────────────────────────────────────
const PlaceholderSkeleton = () => (
  <div
    className="absolute inset-0 animate-pulse"
    style={{
      background: 'linear-gradient(135deg, var(--color-neutral-background-separated-1) 0%, color-mix(in srgb, var(--color-neutral-background-separated-1) 60%, white) 50%, var(--color-neutral-background-separated-1) 100%)',
      backgroundSize: '200% 200%',
    }}
  />
);

// ── Badge Icon (우상단) ────────────────────────────────────────────────────
const BadgeIcon = () => (
  <div
    className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center"
    style={{ background: 'var(--color-neutral-background-raised-1)', boxShadow: '0 1px 4px rgba(0,0,0,.15)' }}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="5" r="2" stroke="var(--color-neutral-foreground-default)" strokeWidth="1.4" />
      <path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="var(--color-neutral-foreground-default)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  </div>
);

// ── 반지름 ─────────────────────────────────────────────────────────────────
const radiusClasses = { none: '', md: 'rounded-md', lg: 'rounded-lg' } as const;

// ── object-fit ─────────────────────────────────────────────────────────────
const fitClasses: Record<ImageRectFit, string> = {
  'cover':      'object-cover',
  'contain':    'object-contain',
  'fill':       'object-fill',
  'scale-down': 'object-scale-down',
};

// ── Component ──────────────────────────────────────────────────────────────
export const ImageRect = ({
  src,
  alt = '',
  type = 'default',
  ratio = '1:1',
  opacity = 'none',
  shadow = 'none',
  fit = 'cover',
  label,
  icon = false,
  disabled = false,
  radius = 'lg',
  className = '',
  ...props
}: ImageRectProps) => {
  const gradients = shadowGradient[shadow];

  const wrapperClasses = [
    'relative overflow-hidden bg-neutral-background-separated-1',
    ratioClasses[ratio],
    radiusClasses[radius],
    disabled ? 'opacity-35 pointer-events-none' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>

      {/* ── 이미지 / 타입별 콘텐츠 ── */}
      {type === 'placeHolder' && <PlaceholderSkeleton />}

      {type === 'noImage' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          style={{ background: 'var(--color-neutral-background-separated-1)' }}>
          <NoImageIcon />
          <span className="text-xs" style={{ color: 'rgba(0,0,0,.3)' }}>이미지 없음</span>
        </div>
      )}

      {type === 'default' && src && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full ${fitClasses[fit]}`}
          {...props}
        />
      )}

      {/* ── 딤 레이어 ── */}
      {opacity !== 'none' && (
        <div
          className={`absolute inset-0 bg-black ${dimClasses[opacity]}`}
          aria-hidden="true"
        />
      )}

      {/* ── 그림자 그라디언트 오버레이 ── */}
      {gradients.map((grad, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{ background: grad }}
          aria-hidden="true"
        />
      ))}

      {/* ── 레이블 오버레이 ── */}
      {label && (
        <div
          className="absolute bottom-0 left-0 right-0 px-3 py-2"
          style={{ background: 'rgba(0,0,0,0.55)' }}
        >
          <p className="text-[13px] font-semibold leading-snug truncate"
            style={{ color: '#ffffff' }}>
            {label}
          </p>
        </div>
      )}

      {/* ── 아이콘 뱃지 ── */}
      {icon && <BadgeIcon />}

    </div>
  );
};

ImageRect.displayName = 'ImageRect';
