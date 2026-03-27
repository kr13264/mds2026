import type { Meta, StoryObj } from '@storybook/react';

const DashboardTemplate = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    minHeight: '100vh',
    background: 'var(--neutral-background-default)',
    display: 'flex',
    flexDirection: 'column',
  }}>
    {/* Top Nav */}
    <header style={{
      height: '56px',
      background: 'var(--neutral-background-base-basic)',
      borderBottom: '1px solid var(--neutral-stroke-divider)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '28px', height: '28px', borderRadius: '8px',
          background: 'linear-gradient(135deg, #6366F1, #D63F85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '12px', fontWeight: '800',
        }}>M</div>
        <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--neutral-foreground-default)' }}>MDS</span>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div style={{
          width: '32px', height: '32px', borderRadius: '50%',
          background: '#EEF2FF', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '14px',
        }}>👤</div>
      </div>
    </header>

    <div style={{ display: 'flex', flex: 1 }}>
      {/* Sidebar */}
      <aside style={{
        width: '220px',
        flexShrink: 0,
        background: 'var(--neutral-background-base-basic)',
        borderRight: '1px solid var(--neutral-stroke-divider)',
        padding: '20px 12px',
      }}>
        {['Overview', 'Analytics', 'Content', 'Users', 'Settings'].map((item, i) => (
          <div key={item} style={{
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: i === 0 ? 600 : 400,
            color: i === 0 ? 'var(--primary-foreground-default)' : 'var(--neutral-foreground-subtle-1)',
            background: i === 0 ? 'var(--primary-background-subtle-1)' : 'transparent',
            marginBottom: '2px',
            cursor: 'pointer',
          }}>{item}</div>
        ))}
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '28px', overflowY: 'auto' }}>
        <h1 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--neutral-foreground-default)', margin: '0 0 4px', letterSpacing: '-0.4px' }}>
          Overview
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--neutral-foreground-subtle-1)', margin: '0 0 24px' }}>
          대시보드 레이아웃 템플릿
        </p>

        {/* Stat Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '16px',
          marginBottom: '28px',
        }}>
          {[
            { label: '총 방문자', value: '12,480', change: '+8.2%', positive: true },
            { label: '신규 가입', value: '1,240', change: '+3.1%', positive: true },
            { label: '이탈률', value: '34.2%', change: '-1.4%', positive: true },
            { label: '세션 시간', value: '4m 32s', change: '-0.8%', positive: false },
          ].map(stat => (
            <div key={stat.label} style={{
              padding: '20px',
              borderRadius: '12px',
              background: 'var(--neutral-background-base-basic)',
              border: '1px solid var(--neutral-stroke-divider)',
            }}>
              <p style={{ fontSize: '12px', color: 'var(--neutral-foreground-subtle-2)', margin: '0 0 8px' }}>{stat.label}</p>
              <p style={{ fontSize: '24px', fontWeight: '800', color: 'var(--neutral-foreground-default)', margin: '0 0 4px' }}>{stat.value}</p>
              <p style={{ fontSize: '12px', fontWeight: 600, color: stat.positive ? 'var(--function-common-positive-default)' : 'var(--function-common-negative-default)', margin: 0 }}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div style={{
          padding: '24px',
          borderRadius: '12px',
          background: 'var(--neutral-background-base-basic)',
          border: '1px solid var(--neutral-stroke-divider)',
          marginBottom: '20px',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <h3 style={{ fontSize: '14px', fontWeight: '700', margin: '0 0 16px', color: 'var(--neutral-foreground-default)' }}>방문자 추이</h3>
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            gap: '8px',
            minHeight: '120px',
          }}>
            {[40, 65, 50, 80, 55, 90, 72, 85, 60, 95, 70, 88].map((h, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <div style={{
                  width: '100%',
                  height: `${h}%`,
                  minHeight: '8px',
                  borderRadius: '4px 4px 0 0',
                  background: i === 9 ? 'var(--primary-background-default)' : 'var(--primary-background-subtle-2)',
                }} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  </div>
);

const meta: Meta<typeof DashboardTemplate> = {
  title: 'Templates/Dashboard',
  component: DashboardTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '사이드바 + 탑내비게이션 + 카드 그리드 구조의 대시보드 레이아웃 템플릿.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DashboardTemplate>;

export const Default: Story = {};
