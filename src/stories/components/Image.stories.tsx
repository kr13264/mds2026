import type { Meta, StoryObj } from '@storybook/react';
import { ImageRect, ImageCircle, ImagePlace } from '@/components/Images';

const FIGMA = 'https://www.figma.com/design/hmnbx3ka';

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 16, fontWeight: 700, color: '#111122', margin: '40px 0 8px', letterSpacing: '-0.2px' }}>{children}</h2>
);
const Sub = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 13, color: '#55557A', margin: '0 0 20px', lineHeight: 1.6 }}>{children}</p>
);

const ImageOverview = () => (
  <div style={{ fontFamily: 'Pretendard,sans-serif', maxWidth: 800, margin: '0 auto', padding: '40px 24px' }}>
    {/* Header */}
    <div style={{ marginBottom: 40 }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9999B8', margin: '0 0 6px' }}>
        Components / Image
      </p>
      <h1 style={{ fontSize: 26, fontWeight: 800, color: '#111122', margin: '0 0 10px', letterSpacing: '-0.5px' }}>
        Image
      </h1>
      <p style={{ fontSize: 14, color: '#55557A', margin: 0, lineHeight: 1.7, maxWidth: 560 }}>
        비율·딤·그림자를 조합하는 이미지 래퍼 컴포넌트 패밀리입니다.
        Rectangle, Circle 형태와 Place·Opacity·Shadow 레이어 컴포넌트로 구성됩니다.
      </p>
      <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
        {['Figma hmnbx3ka', 'node-id 3055', 'React 18', 'Tailwind CSS'].map(tag => (
          <span key={tag} style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 6, background: '#EEF2FF', color: '#6366F1' }}>{tag}</span>
        ))}
      </div>
    </div>

    {/* 컴포넌트 목록 */}
    <Heading>컴포넌트 구성</Heading>
    <Sub>5개의 독립 컴포넌트로 이미지 처리의 각 역할을 분리합니다.</Sub>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12, marginBottom: 40 }}>
      {[
        { name: 'Rectangle',  desc: '비율·딤·그림자·레이블을 조합한 메인 이미지 래퍼', path: '?path=/story/components-image-rectangle--playground' },
        { name: 'Circle',     desc: '원형 이미지. 프로필·아바타·채널 썸네일에 사용', path: '?path=/story/components-image-circle--playground' },
        { name: 'Place',      desc: '기본 이미지 배치. default·noImage·placeHolder', path: '?path=/story/components-image-place--playground' },
        { name: 'Opacity',    desc: '검정 딤 레이어 (none · 3% · 40%)', path: '?path=/story/components-image-opacity--playground' },
        { name: 'Shadow',     desc: '방향성 그라디언트 오버레이 (up · down · up&down)', path: '?path=/story/components-image-shadow--playground' },
      ].map(c => (
        <a key={c.name} href={c.path} style={{ textDecoration: 'none' }}>
          <div style={{ padding: '16px 18px', borderRadius: 10, border: '1px solid #E4E4EE', background: '#fff', cursor: 'pointer' }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#111122', margin: '0 0 4px' }}>{c.name}</p>
            <p style={{ fontSize: 12, color: '#9999B8', margin: 0, lineHeight: 1.5 }}>{c.desc}</p>
          </div>
        </a>
      ))}
    </div>

    {/* 미리보기 */}
    <Heading>미리보기</Heading>
    <Sub>Rectangle(16:9), Circle(4종 사이즈), Place(3종 타입) 조합 예시입니다.</Sub>
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: 40 }}>
      <div style={{ width: 240 }}>
        <ImageRect src="https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop" ratio="16:9" opacity="40%" shadow="down" label="Rectangle" icon />
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {([32, 48, 64, 80] as const).map(s => <ImageCircle key={s} size={s} />)}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {(['default', 'noImage', 'placeHolder'] as const).map(t => <ImagePlace key={t} type={t} size={80} />)}
      </div>
    </div>

    {/* 디자인 소스 */}
    <Heading>디자인 소스</Heading>
    <a
      href={`${FIGMA}?node-id=3055`}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '10px 16px', borderRadius: 8,
        border: '1px solid #E4E4EE', background: '#fff',
        fontSize: 13, fontWeight: 600, color: '#111122',
        textDecoration: 'none',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" rx="3" fill="#1E1E1E"/>
        <path d="M5 2h2.5a2 2 0 0 1 0 4H5V2z" fill="#F24E1E"/>
        <path d="M5 6h2.5a2 2 0 0 1 0 4H5V6z" fill="#A259FF"/>
        <path d="M5 10h2.5a2 2 0 0 1 2 2v.5a1.5 1.5 0 0 1-3 0V10z" fill="#0ACF83"/>
        <path d="M9.5 2H12a2 2 0 0 1 0 4H9.5V2z" fill="#FF7262"/>
        <circle cx="11" cy="8" r="2" fill="#1ABCFE"/>
      </svg>
      Figma — hmnbx3ka · node 3055
    </a>
  </div>
);

const meta: Meta<typeof ImageOverview> = {
  title: 'Components/Image',
  component: ImageOverview,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: { type: 'figma', url: `${FIGMA}?node-id=3055` },
    docs: {
      page: () => <ImageOverview />,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageOverview>;

export const Overview: Story = {};
