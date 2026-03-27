import type { ProfileProps, ProfileSize } from './ProfileVertical.types';

const sizeMap: Record<ProfileSize, { avatar: number; fontSize: number }> = {
  default: { avatar: 48, fontSize: 14 },
  small:   { avatar: 36, fontSize: 13 },
};

export const Profile = ({
  size = 'default',
  emphasis = false,
  selected = false,
  src,
  alt = '',
  name = '프로필명',
  label = true,
  info,
  className = '',
}: ProfileProps) => {
  const { avatar, fontSize } = sizeMap[size];

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'Pretendard, -apple-system, sans-serif',
      }}
      className={className}
    >
      {/* Avatar */}
      <div
        style={{
          width: avatar,
          height: avatar,
          borderRadius: 999,
          overflow: 'hidden',
          flexShrink: 0,
          position: 'relative',
          outline: selected ? '2px solid #3283fd' : 'none',
          outlineOffset: 1,
          background: '#f0f0f4',
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#E4E4EE',
            }}
          />
        )}
        {/* 3% dim overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.03)',
            borderRadius: 999,
          }}
        />
      </div>

      {/* Text */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
        <span
          style={{
            fontSize,
            fontWeight: emphasis ? 600 : 400,
            color: '#2e2e2e',
            lineHeight: '19px',
            letterSpacing: -0.3,
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </span>
        {label && info && (
          <span
            style={{
              fontSize,
              fontWeight: 400,
              color: '#737373',
              lineHeight: '19px',
              whiteSpace: 'nowrap',
            }}
          >
            {info}
          </span>
        )}
      </div>
    </div>
  );
};

Profile.displayName = 'Profile';
