import type { Meta, StoryObj } from '@storybook/react';

const cards = [
  {
    title: 'Foundation',
    desc: 'BON UI 컬러 토큰, 레이아웃 그리드, 타이포그래피, 그라디언트 등 디자인의 기반을 정의합니다.',
    icon: '◈', color: '#6366F1', bg: '#EEF2FF',
  },
  {
    title: 'Icon',
    desc: '서비스 전반에서 사용하는 아이콘 세트입니다. 추후 업데이트 예정입니다.',
    icon: '⬡', color: '#9999B8', bg: '#F5F5F8',
  },
  {
    title: 'Components',
    desc: 'Badge, Button, Chip, Divider 등 16개 이상의 재사용 가능한 UI 컴포넌트를 제공합니다.',
    icon: '⬒', color: '#D63F85', bg: '#FFF0F7',
  },
  {
    title: 'Templates',
    desc: '대시보드, 랜딩페이지, 폼 페이지 등 자주 사용되는 레이아웃 패턴을 제공합니다.',
    icon: '▦', color: '#12B76A', bg: '#F0FDF4',
  },
];

const stats = [
  { label: 'Components', value: '16', icon: '⬡' },
  { label: 'Color Tokens', value: '422+', icon: '◉' },
  { label: 'Templates', value: '3', icon: '▦' },
  { label: 'Foundation', value: '3', icon: '◈' },
];

const HomePage = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    maxWidth: '960px',
    margin: '0 auto',
    padding: '48px 32px',
    color: '#111122',
  }}>
    {/* Header */}
    <div style={{ marginBottom: '56px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #6366F1, #D63F85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '20px', fontWeight: 800, flexShrink: 0,
        }}>M</div>
        <div>
          <p style={{ fontSize: '13px', color: '#9999B8', margin: 0, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>NAVER UX</p>
          <h1 style={{ fontSize: '28px', fontWeight: 800, margin: 0, letterSpacing: '-0.5px', lineHeight: 1.2 }}>
            MDS Design System
          </h1>
        </div>
      </div>

      <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#55557A', maxWidth: '600px', margin: '0 0 28px' }}>
        MDS(Main Design System)는 NAVER UX의 공통 디자인 언어입니다.
        BON UI 컬러 토큰, 반응형 레이아웃 가이드, 재사용 가능한 컴포넌트 라이브러리를 제공합니다.
      </p>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {[
          { label: 'React 18 + TypeScript', color: '#6366F1', bg: '#EEF2FF' },
          { label: 'Storybook 8.x', color: '#D63F85', bg: '#FFF0F7' },
          { label: 'Tailwind CSS v3', color: '#12B76A', bg: '#F0FDF4' },
          { label: 'BON UI Tokens', color: '#F79009', bg: '#FFF7ED' },
        ].map(tag => (
          <span key={tag.label} style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '6px 12px', borderRadius: '6px',
            background: tag.bg, color: tag.color,
            fontSize: '12px', fontWeight: 600,
          }}>✦ {tag.label}</span>
        ))}
      </div>
    </div>

    {/* Stats */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: '16px',
      marginBottom: '56px',
    }}>
      {stats.map(s => (
        <div key={s.label} style={{
          padding: '20px', borderRadius: '12px',
          background: '#FFFFFF', border: '1px solid #E4E4EE',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>{s.icon}</div>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#6366F1', lineHeight: 1 }}>{s.value}</div>
          <div style={{ fontSize: '12px', color: '#9999B8', marginTop: '4px', fontWeight: 500 }}>{s.label}</div>
        </div>
      ))}
    </div>

    {/* Section cards */}
    <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.3px' }}>시스템 구성</h2>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '16px',
      marginBottom: '56px',
    }}>
      {cards.map(c => (
        <div key={c.title} style={{
          padding: '24px', borderRadius: '12px',
          background: '#FFFFFF', border: '1px solid #E4E4EE',
        }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: c.bg, display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '20px',
            color: c.color, marginBottom: '12px',
          }}>{c.icon}</div>
          <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 8px', color: '#111122' }}>{c.title}</h3>
          <p style={{ fontSize: '13px', color: '#55557A', margin: 0, lineHeight: 1.6 }}>{c.desc}</p>
        </div>
      ))}
    </div>

    {/* Getting Started */}
    <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.3px' }}>시작하기</h2>
    <div style={{
      borderRadius: '12px', background: '#111122',
      padding: '24px', marginBottom: '16px',
    }}>
      <pre style={{
        margin: 0, color: '#E0E0F0', fontSize: '13px',
        lineHeight: 1.8, fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      }}>{`# 1. 의존성 설치
pnpm install

# 2. BON UI 설치 (내부 레지스트리 필요)
pnpm install @bonui/react @bonui/styles

# 3. Storybook 실행
pnpm storybook`}</pre>
    </div>
    <div style={{
      padding: '16px 20px', borderRadius: '8px',
      background: '#EEF2FF', border: '1px solid #C7D2FE',
      fontSize: '13px', color: '#4338CA', lineHeight: 1.6,
    }}>
      💡 <strong>SKILL.md</strong>를 참고하여 컴포넌트 생성 규칙과 BON UI 컬러 토큰 사용법을 확인하세요.
    </div>

    {/* Footer */}
    <div style={{
      marginTop: '64px', paddingTop: '24px',
      borderTop: '1px solid #E4E4EE',
      display: 'flex', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '12px',
    }}>
      <span style={{ fontSize: '12px', color: '#9999B8' }}>MDS Design System · NAVER UX · 2025</span>
      <span style={{ fontSize: '12px', color: '#9999B8' }}>Powered by Storybook 8 · React 18 · Tailwind CSS v3</span>
    </div>
  </div>
);

const meta: Meta<typeof HomePage> = {
  title: 'Home',
  component: HomePage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
