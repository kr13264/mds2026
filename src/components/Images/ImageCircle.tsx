export type ImageCircleType = 'default' | 'noImage' | 'placeHolder';
export type ImageCircleSize = 32 | 40 | 48 | 56 | 64 | 80 | 96 | 120;

export interface ImageCircleProps {
  src?: string;
  alt?: string;
  type?: ImageCircleType;
  size?: ImageCircleSize;
  disabled?: boolean;
  className?: string;
}

const NoImageIcon = ({ size }: { size: number }) => {
  const s = Math.round(size * 0.35);
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 17l5-5 3 3 2.5-2.5L19 17" stroke="rgba(0,0,0,.28)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8.5" cy="9.5" r="2" stroke="rgba(0,0,0,.28)" strokeWidth="1.8" />
    </svg>
  );
};

export const ImageCircle = ({
  src,
  alt = '',
  type = 'default',
  size = 48,
  disabled = false,
  className = '',
}: ImageCircleProps) => {
  const base: React.CSSProperties = {
    width: size,
    height: size,
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
      <div style={{ ...base, background: '#e8e8ee' }} className={className}>
        <NoImageIcon size={size} />
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
