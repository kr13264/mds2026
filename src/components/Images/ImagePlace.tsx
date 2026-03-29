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
      <div style={{ ...base, background: 'var(--color-neutral-background-separated-1)' }} className={className}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, var(--color-neutral-background-separated-1) 25%, color-mix(in srgb, var(--color-neutral-background-separated-1) 60%, white) 50%, var(--color-neutral-background-separated-1) 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.4s infinite',
        }} />
        <style>{`@keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }`}</style>
      </div>
    );
  }

  if (type === 'noImage') {
    // elem.logo: 22×20 px in a 150×150 container (Figma)
    const logoW = Math.round(size * (22 / 150));
    const logoH = Math.round(logoW * (20 / 22));
    return (
      <div style={{ ...base, background: 'var(--color-neutral-background-separated-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className={className}>
        <svg
          width={logoW}
          height={logoH}
          viewBox="0 0 22 20"
          aria-hidden="true"
        >
          {/* Left vertical bar */}
          <rect x="0" y="0" width="5.5" height="20" fill="#CCCED0"/>
          {/* Diagonal stripe (parallelogram) */}
          <polygon points="5.5,0 11,0 16.5,20 11,20" fill="#CCCED0"/>
          {/* Right vertical bar */}
          <rect x="16.5" y="0" width="5.5" height="20" fill="#CCCED0"/>
        </svg>
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
