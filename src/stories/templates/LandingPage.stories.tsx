import type { Meta, StoryObj } from '@storybook/react';

const LandingPageTemplate = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    minHeight: '100vh',
    background: 'var(--color-neutral-background-default)',
    color: 'var(--color-neutral-foreground-default)',
  }}>
    {/* Nav */}
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', height: '60px',
      background: 'color-mix(in srgb, var(--color-neutral-background-raised-1) 90%, transparent)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--color-neutral-stroke-divider)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '28px', height: '28px', borderRadius: '8px',
          background: 'linear-gradient(135deg, var(--color-primary-foreground-default), #D63F85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--color-neutral-background-static-white)', fontSize: '12px', fontWeight: '800',
        }}>M</div>
        <span style={{ fontSize: '14px', fontWeight: '700' }}>MDS</span>
      </div>
      <nav style={{ display: 'flex', gap: '24px' }}>
        {['제품', '기능', '가격', '문의'].map(item => (
          <span key={item} style={{ fontSize: '13px', color: 'var(--color-neutral-foreground-subtle-1)', cursor: 'pointer', fontWeight: 500 }}>{item}</span>
        ))}
      </nav>
      <div style={{
        padding: '8px 16px', borderRadius: '8px',
        background: 'var(--color-primary-foreground-default)', color: 'var(--color-neutral-background-static-white)',
        fontSize: '13px', fontWeight: '600', cursor: 'pointer',
      }}>시작하기</div>
    </header>

    {/* Hero */}
    <section style={{
      textAlign: 'center',
      padding: '80px 40px 64px',
      background: 'linear-gradient(180deg, var(--color-neutral-background-separated-1) 0%, var(--color-neutral-background-default) 100%)',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        padding: '5px 12px', borderRadius: '20px',
        background: 'var(--color-primary-background-subtle-1)', border: '1px solid var(--color-primary-background-decorative)',
        fontSize: '12px', color: 'var(--color-primary-foreground-default)', fontWeight: '600',
        marginBottom: '24px',
      }}>✦ New — Storybook 8 기반</div>

      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 56px)',
        fontWeight: '900',
        lineHeight: 1.15,
        letterSpacing: '-1px',
        margin: '0 0 20px',
        maxWidth: '720px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'linear-gradient(135deg, var(--color-neutral-foreground-default), var(--color-primary-foreground-default))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        디자인과 개발을<br />하나의 언어로
      </h1>

      <p style={{
        fontSize: '17px', color: 'var(--color-neutral-foreground-subtle-1)', lineHeight: 1.7,
        maxWidth: '480px', margin: '0 auto 36px',
      }}>
        MDS Design System은 NAVER UX의 공통 디자인 언어입니다.
        BON UI 토큰 기반의 일관된 컴포넌트를 제공합니다.
      </p>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{
          padding: '12px 24px', borderRadius: '10px',
          background: 'var(--color-primary-foreground-default)', color: 'var(--color-neutral-background-static-white)',
          fontSize: '14px', fontWeight: '700', cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
        }}>Storybook 보기</div>
        <div style={{
          padding: '12px 24px', borderRadius: '10px',
          background: 'var(--color-neutral-background-raised-1)', color: 'var(--color-neutral-foreground-default)',
          border: '1.5px solid var(--color-neutral-stroke-divider)',
          fontSize: '14px', fontWeight: '600', cursor: 'pointer',
        }}>SKILL.md 읽기</div>
      </div>
    </section>

    {/* Feature Grid */}
    <section style={{ padding: '64px 40px', maxWidth: '1120px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800', textAlign: 'center', margin: '0 0 8px', letterSpacing: '-0.4px' }}>
        주요 기능
      </h2>
      <p style={{ fontSize: '14px', color: 'var(--color-neutral-foreground-subtle-1)', textAlign: 'center', margin: '0 0 40px' }}>
        일관된 디자인과 효율적인 개발을 위한 모든 것
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
        {[
          { icon: '◈', title: 'BON UI Tokens', desc: '422개 이상의 컬러 토큰으로 다크모드까지 완벽 지원' },
          { icon: '⬡', title: '16 Components', desc: 'Badge부터 Tooltip까지 자주 사용하는 컴포넌트 제공' },
          { icon: '▦', title: 'Templates', desc: '대시보드, 랜딩, 폼 페이지 레이아웃 패턴 즉시 활용' },
          { icon: '◉', title: 'Responsive', desc: 'sm/md/lg/xl 4단계 반응형 브레이크포인트 적용' },
          { icon: '⬒', title: 'TypeScript', desc: '모든 Props 타입 정의. 자동완성과 타입 안전성 보장' },
          { icon: '✦', title: 'Storybook 8', desc: 'Autodocs, Controls, Interactions 완전 지원' },
        ].map(f => (
          <div key={f.title} style={{
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid var(--color-neutral-stroke-divider)',
            background: 'var(--color-neutral-background-raised-1)',
          }}>
            <div style={{
              fontSize: '22px', color: 'var(--color-primary-foreground-default)',
              background: 'var(--color-primary-background-subtle-1)', width: '44px', height: '44px',
              borderRadius: '10px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', marginBottom: '14px',
            }}>{f.icon}</div>
            <h3 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 8px' }}>{f.title}</h3>
            <p style={{ fontSize: '13px', color: 'var(--color-neutral-foreground-subtle-1)', margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Footer */}
    <footer style={{
      borderTop: '1px solid var(--color-neutral-stroke-divider)',
      padding: '24px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '12px',
      color: 'var(--color-neutral-foreground-subtle-3)',
      flexWrap: 'wrap',
      gap: '8px',
    }}>
      <span>MDS Design System · NAVER UX · 2025</span>
      <span>React 18 · TypeScript · Tailwind CSS v3 · Storybook 8</span>
    </footer>
  </div>
);

const meta: Meta<typeof LandingPageTemplate> = {
  title: 'Templates/Landing Page',
  component: LandingPageTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '히어로 섹션 + 피처 그리드 + 푸터로 구성된 랜딩페이지 레이아웃 템플릿.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LandingPageTemplate>;

export const Default: Story = {};
