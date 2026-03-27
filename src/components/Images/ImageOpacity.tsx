export type ImageOpacityLevel = 'none' | '3%' | '40%';

export interface ImageOpacityProps {
  src?: string;
  alt?: string;
  opacity?: ImageOpacityLevel;
  disabled?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const dimOpacity: Record<ImageOpacityLevel, number> = {
  'none': 0,
  '3%':   0.03,
  '40%':  0.40,
};

export const ImageOpacity = ({
  src = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop',
  alt = '',
  opacity = 'none',
  disabled = false,
  width = 150,
  height = 150,
  className = '',
}: ImageOpacityProps) => (
  <div
    style={{
      position: 'relative',
      width,
      height,
      borderRadius: 8,
      overflow: 'hidden',
      flexShrink: 0,
      opacity: disabled ? 0.35 : 1,
      pointerEvents: disabled ? 'none' : undefined,
    }}
    className={className}
  >
    <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: '#000',
      opacity: dimOpacity[opacity],
    }} aria-hidden="true" />
  </div>
);

ImageOpacity.displayName = 'ImageOpacity';
