import type { ThumbnailProps, ThumbnailRadius, ThumbnailRatio } from './Thumbnail.types';

const radiusMap: Record<ThumbnailRadius, number> = {
  none: 0,
  8: 8,
  12: 12,
  16: 16,
};

const ratioMap: Record<ThumbnailRatio, number> = {
  '1:1':  1,
  '16:9': 9 / 16,
  '4:3':  3 / 4,
  '4:5':  5 / 4,
  '9:16': 16 / 9,
};

// ── 재생시간 아이콘 (우하단) ─────────────────────────────────────────────────
const IconVideo = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3.5C2 2.67 2.67 2 3.5 2H8.5C9.33 2 10 2.67 10 3.5V10.5C10 11.33 9.33 12 8.5 12H3.5C2.67 12 2 11.33 2 10.5V3.5Z" fill="white" fillOpacity="0.9"/>
    <path d="M10 5.5L12.5 4V10L10 8.5V5.5Z" fill="white" fillOpacity="0.9"/>
  </svg>
);

// ── 더보기 아이콘 (우상단) ────────────────────────────────────────────────────
const IconMore = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="6"  r="1.5" fill="white"/>
    <circle cx="12" cy="12" r="1.5" fill="white"/>
    <circle cx="12" cy="18" r="1.5" fill="white"/>
  </svg>
);

export const Thumbnail = ({
  type = 'image',
  radius = 'none',
  ratio,
  src,
  alt = '',
  width = 150,
  height: heightProp = 150,
  duration,
  badge,
  rank,
  showMore = false,
  className = '',
}: ThumbnailProps) => {
  const br = radiusMap[radius];
  const height = ratio ? Math.round(width * ratioMap[ratio]) : heightProp;
  const isMedia = type === 'media' || type === 'gallery';

  // 타입별 딤/쉐도우 오버레이
  const dimOpacity  = type === 'image' ? 0.03 : 0.08;
  const shadowStyle = isMedia
    ? type === 'gallery'
      ? {
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 33%, rgba(0,0,0,0) 100%),
            linear-gradient(to top,   rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 100%)
          `,
        }
      : {
          background: `linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 100%)`,
        }
    : null;

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        borderRadius: br,
        overflow: 'hidden',
        flexShrink: 0,
        background: 'var(--color-neutral-background-separated-1)',
        fontFamily: 'Pretendard, -apple-system, sans-serif',
      }}
      className={className}
    >
      {/* 이미지 */}
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, #c8d8e8 0%, #ddd0b8 55%, #e8d4a8 100%)' }} />
      )}

      {/* Dim 오버레이 */}
      <div style={{ position: 'absolute', inset: 0, background: `rgba(0,0,0,${dimOpacity})` }} />

      {/* Shadow 오버레이 (media·gallery) */}
      {shadowStyle && (
        <div style={{ position: 'absolute', inset: 0, ...shadowStyle }} />
      )}

      {/* 좌상단 코너 뱃지 */}
      {badge && (
        <div style={{
          position: 'absolute', top: 8, left: 8,
          padding: '3px 6px',
          borderRadius: 999,
          background: 'var(--color-primary-background-default)',
          color: '#fff',
          fontSize: 11, fontWeight: 700, lineHeight: '16px',
          letterSpacing: -0.3,
          whiteSpace: 'nowrap',
        }}>
          {badge}
        </div>
      )}

      {/* 우상단 더보기 */}
      {showMore && (
        <div style={{
          position: 'absolute', top: 6, right: 6,
          width: 24, height: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <IconMore />
        </div>
      )}

      {/* 좌하단 랭킹 */}
      {rank !== undefined && (
        <div style={{
          position: 'absolute', bottom: 8, left: 8,
          fontSize: 28, fontWeight: 800,
          color: '#fff',
          lineHeight: 1,
          textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          letterSpacing: -1,
        }}>
          {rank}
        </div>
      )}

      {/* 우하단 재생시간 (media·gallery) */}
      {isMedia && duration && (
        <div style={{
          position: 'absolute', bottom: 8, right: 8,
          display: 'flex', alignItems: 'center', gap: 3,
        }}>
          <IconVideo />
          <span style={{
            fontSize: 12, fontWeight: 700,
            color: '#fff', lineHeight: '16px',
            letterSpacing: -0.3,
          }}>
            {duration}
          </span>
        </div>
      )}
    </div>
  );
};

Thumbnail.displayName = 'Thumbnail';
