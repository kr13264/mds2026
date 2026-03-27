export type ImageCircleType = 'default' | 'noImage' | 'noImgPerson' | 'placeHolder';
export type ImageCircleSize = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const sizeMap: Record<ImageCircleSize, number> = {
  '3xs': 16,
  '2xs': 20,
  'xs':  24,
  'sm':  28,
  'md':  36,
  'lg':  40,
  'xl':  48,
  '2xl': 52,
};

const FALLBACK_BG = '#D9D9D9';
const FALLBACK_FG = '#B3B3B3';

// noImage: 회색 원 + 회색 N (피그마 시안처럼 폰트 의존 없이 path로 구현)
const NoImageIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    {/* N */}
    <path
      d="M16 34V14h5.2l5.6 10.6V14H32v20h-5.2l-5.6-10.6V34H16z"
      fill={FALLBACK_FG}
    />
  </svg>
);

// noImgPerson: 회색 원 + 회색 사람 실루엣
const NoImgPersonIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="19" r="7.5" fill={FALLBACK_FG} />
    <path
      d="M12.5 40.5c0-6.4 5.2-11.6 11.5-11.6s11.5 5.2 11.5 11.6V43H12.5v-2.5z"
      fill={FALLBACK_FG}
    />
  </svg>
);

export interface ImageCircleProps {
  src?: string;
  alt?: string;
  type?: ImageCircleType;
  size?: ImageCircleSize;
  disabled?: boolean;
  className?: string;
}

export const ImageCircle = ({
  src,
  alt = '',
  type = 'default',
  size = 'md',
  disabled = false,
  className = '',
}: ImageCircleProps) => {
  const px = sizeMap[size];
  const base: React.CSSProperties = {
    width: px,
    height: px,
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    opacity: disabled ? 0.35 : 1,
    pointerEvents: disabled ? 'none' : undefined,
  };

  if (type === 'placeHolder') {
    return (
      <div style={{ ...base, background: '#e8e8ee' }} className={className}>
        <style>{`@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          background: 'linear-gradient(90deg, #e8e8ee 25%, #f4f4f8 50%, #e8e8ee 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.4s infinite',
        }} />
      </div>
    );
  }

  if (type === 'noImage') {
    return (
      <div style={{ ...base, background: FALLBACK_BG }} className={className}>
        <NoImageIcon size={px} />
      </div>
    );
  }

  if (type === 'noImgPerson') {
    return (
      <div style={{ ...base, background: FALLBACK_BG }} className={className}>
        <NoImgPersonIcon size={px} />
      </div>
    );
  }

  return (
    <div style={base} className={className}>
      <img
        src={src || `https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop`}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

ImageCircle.displayName = 'ImageCircle';
