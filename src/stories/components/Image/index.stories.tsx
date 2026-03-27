import type { Meta, StoryObj } from '@storybook/react';
import { ImageRect, ImageCircle, ImagePlace, ImageOpacity, ImageShadow } from '@/components/Images';

const IMG_SRC = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 8 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
      textTransform: 'uppercase', color: '#9999B8', margin: '0 0 4px',
    }}>{label}</p>
    {desc && <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: '#55557A', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof ImageRect> = {
  title: 'Components/Image',
  component: ImageRect,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
비율·딤·그림자를 조합하는 이미지 래퍼 컴포넌트 패밀리입니다.
Rectangle, Circle 형태와 Place·Opacity·Shadow 레이어 컴포넌트로 구성됩니다.

---

<div style="margin-bottom:30px"></div>

### 컴포넌트 구성

| Component | Description | Usage |
|-----------|-------------|-------|
| \`Rectangle\` | 비율·딤·그림자·레이블을 조합한 이미지 래퍼 | 콘텐츠 썸네일, 배너 |
| \`Circle\` | 원형 이미지 | 프로필·아바타·채널 썸네일 |
| \`Place\` | 이미지 배치 상태 (default·noImage·placeHolder) | 이미지 로딩 상태 표현 |
| \`Opacity\` | 검정 딤 레이어 (none·3%·40%) | 이미지 위 텍스트 가독성 확보 |
| \`Shadow\` | 방향성 그라디언트 오버레이 | 이미지 엣지 처리 |

\`\`\`tsx
import { ImageRect, ImageCircle, ImagePlace, ImageOpacity, ImageShadow } from '@/components/Images';

// Rectangle — 비율·딤·그림자 조합
<ImageRect src={imgSrc} ratio="16:9" opacity="40%" shadow="down" label="제목" />

// Circle — 원형 프로필
<ImageCircle src={imgSrc} size={48} />

// Place — 상태별 플레이스홀더
<ImagePlace type="placeHolder" size={120} />
\`\`\`
        `.trim(),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageRect>;

// ── Overview ───────────────────────────────────────────────────────────────
export const Overview: Story = {
  name: 'Overview',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="Rectangle" desc="비율·딤·그림자·레이블을 조합한 메인 이미지 래퍼">
        <Row gap={12}>
          {[
            { ratio: '16:9' as const, label: '16:9 · default' },
            { ratio: '1:1' as const, label: '1:1 · opacity 40%', opacity: '40%' as const },
            { ratio: '3:4' as const, label: '3:4 · shadow down', shadow: 'down' as const },
          ].map(({ ratio, label, opacity, shadow }) => (
            <div key={label} style={{ width: 180 }}>
              <ImageRect
                src={IMG_SRC}
                ratio={ratio}
                opacity={opacity ?? 'none'}
                shadow={shadow ?? 'none'}
              />
              <Caption>{label}</Caption>
            </div>
          ))}
        </Row>
      </Block>

      <Block label="Circle" desc="원형 이미지. 프로필·아바타·채널 썸네일에 사용">
        <Row gap={12} >
          {([32, 48, 64, 80, 96] as const).map(size => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ImageCircle src={IMG_SRC} size={size} />
              <Caption>{size}</Caption>
            </div>
          ))}
        </Row>
      </Block>

      <Block label="Place" desc="이미지 배치 상태 (default · noImage · placeHolder)">
        <Row gap={12}>
          {(['default', 'noImage', 'placeHolder'] as const).map(type => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ImagePlace type={type} size={100} src={type === 'default' ? IMG_SRC : undefined} />
              <Caption>{type}</Caption>
            </div>
          ))}
        </Row>
      </Block>

      <Block label="Opacity" desc="검정 딤 레이어 (none · 3% · 40%)">
        <Row gap={12}>
          {(['none', '3%', '40%'] as const).map(opacity => (
            <div key={opacity} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ImageOpacity src={IMG_SRC} opacity={opacity} width={120} height={90} />
              <Caption>{opacity}</Caption>
            </div>
          ))}
        </Row>
      </Block>

      <Block label="Shadow" desc="방향성 그라디언트 오버레이 (none · up · down · up&amp;down)">
        <Row gap={12}>
          {([
            { shadow: 'none' as const, showShadow: false },
            { shadow: 'up' as const, showShadow: true },
            { shadow: 'down' as const, showShadow: true },
            { shadow: 'up&down' as const, showShadow: true },
          ]).map(({ shadow, showShadow }) => (
            <div key={shadow} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ImageShadow src={IMG_SRC} shadow={shadow} showShadow={showShadow} width={120} height={90} />
              <Caption>{shadow}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};
