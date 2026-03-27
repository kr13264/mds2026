export type ImageShadowDirection = 'none' | 'up' | 'down' | 'up&down';

export interface ImageShadowProps {
  src?: string;
  alt?: string;
  showShadow?: boolean;
  shadow?: ImageShadowDirection;
  disabled?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const gradients: Record<ImageShadowDirection, string[]> = {
  'none':   [],
  'up':     ['linear-gradient(to bottom, rgba(0,0,0,.60) 0%, transparent 60%)'],
  'down':   ['linear-gradient(to top, rgba(0,0,0,.60) 0%, transparent 60%)'],
  'up&down': [
    'linear-gradient(to bottom, rgba(0,0,0,.60) 0%, transparent 60%)',
    'linear-gradient(to top,   rgba(0,0,0,.60) 0%, transparent 60%)',
  ],
};

export const ImageShadow = ({
  src = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop',
  alt = '',
  showShadow = false,
  shadow = 'none',
  disabled = false,
  width = 150,
  height = 150,
  className = '',
}: ImageShadowProps) => {
  const activeDir: ImageShadowDirection = showShadow ? shadow : 'none';

  return (
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
      {gradients[activeDir].map((grad, i) => (
        <div key={i} style={{ position: 'absolute', inset: 0, background: grad }} aria-hidden="true" />
      ))}
    </div>
  );
};

ImageShadow.displayName = 'ImageShadow';
