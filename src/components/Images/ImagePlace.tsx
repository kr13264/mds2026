type ImagePlaceType = 'default' | 'noImage' | 'placeHolder';

export interface ImagePlaceProps {
  /** 이미지 표시 타입 */
  type?: ImagePlaceType;
  /** 이미지 URL (type="default" 일 때 사용) */
  src?: string;
  alt?: string;
  /** 크기 (px) */
  size?: number;
  className?: string;
}

const NoImageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="rgba(0,0,0,0.06)" />
    <path d="M4 17l5-5 3 3 2.5-2.5L19 17" stroke="rgba(0,0,0,.22)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8.5" cy="9.5" r="1.5" stroke="rgba(0,0,0,.22)" strokeWidth="1.4" />
  </svg>
);

export const ImagePlace = ({ type = 'default', src, alt = '', size = 140, className = '' }: ImagePlaceProps) => {
  const base: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: 8,
    overflow: 'hidden',
    flexShrink: 0,
    position: 'relative',
  };

  if (type === 'placeHolder') {
    return (
      <div style={{ ...base, background: '#e8e8ee' }} className={className}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, #e8e8ee 25%, #f4f4f8 50%, #e8e8ee 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.4s infinite',
        }} />
        <style>{`@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`}</style>
      </div>
    );
  }

  if (type === 'noImage') {
    return (
      <div style={{ ...base, background: '#e8e8ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 4 }} className={className}>
        <NoImageIcon />
        <span style={{ fontSize: 10, color: 'rgba(0,0,0,.3)', fontFamily: 'Pretendard,sans-serif', fontWeight: 600 }}>N</span>
      </div>
    );
  }

  // default — src 있으면 이미지, 없으면 그라디언트 플레이스홀더
  return (
    <div style={{ ...base, background: 'linear-gradient(180deg, #c8d8e8 0%, #ddd0b8 55%, #e8d4a8 100%)' }} className={className}>
      {src && <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
    </div>
  );
};

ImagePlace.displayName = 'ImagePlace';
