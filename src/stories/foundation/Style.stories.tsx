import type { Meta, StoryObj } from '@storybook/react';

// ── Typography + Gradient + Elevation ─────────────────────────────────────
const StyleGuide = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    maxWidth: '960px',
    margin: '0 auto',
    padding: '40px 24px',
  }}>
    <h1 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 8px', color: '#111122', letterSpacing: '-0.5px' }}>
      Style Guide
    </h1>
    <p style={{ fontSize: '14px', color: '#55557A', margin: '0 0 40px', lineHeight: 1.6 }}>
      Typography, Gradient, Elevation 등 시각 스타일 가이드입니다.
    </p>

    {/* Typography */}
    <section style={{ marginBottom: '56px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 20px', color: '#111122' }}>Typography — Pretendard</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { label: 'Display / 32px / 800', size: '32px', weight: 800, tailwind: 'text-[32px] font-extrabold' },
          { label: 'H1 / 24px / 700', size: '24px', weight: 700, tailwind: 'text-2xl font-bold' },
          { label: 'H2 / 20px / 700', size: '20px', weight: 700, tailwind: 'text-xl font-bold' },
          { label: 'H3 / 18px / 600', size: '18px', weight: 600, tailwind: 'text-lg font-semibold' },
          { label: 'H4 / 16px / 600', size: '16px', weight: 600, tailwind: 'text-base font-semibold' },
          { label: 'Body / 14px / 400', size: '14px', weight: 400, tailwind: 'text-sm' },
          { label: 'Small / 13px / 400', size: '13px', weight: 400, tailwind: 'text-[13px]' },
          { label: 'Caption / 12px / 400', size: '12px', weight: 400, tailwind: 'text-xs' },
          { label: 'Label / 11px / 600', size: '11px', weight: 600, tailwind: 'text-[11px] font-semibold uppercase tracking-wider' },
        ].map(t => (
          <div key={t.label} style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '12px 16px',
            borderRadius: '8px',
            background: '#FFFFFF',
            border: '1px solid #E4E4EE',
          }}>
            <span style={{ fontSize: t.size, fontWeight: t.weight, color: '#111122', flex: 1 }}>
              가나다 ABC abc 123
            </span>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p style={{ margin: 0, fontSize: '11px', color: '#55557A' }}>{t.label}</p>
              <code style={{ fontSize: '10px', color: '#6366F1', background: '#EEF2FF', padding: '1px 5px', borderRadius: '3px' }}>{t.tailwind}</code>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Gradients */}
    <section style={{ marginBottom: '56px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 20px', color: '#111122' }}>Gradients</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '24px' }}>
        {[
          { name: 'Brand', value: 'linear-gradient(135deg, #6366F1, #D63F85)', tailwind: 'bg-gradient-to-br from-primary-500 to-[#D63F85]' },
          { name: 'Primary', value: 'linear-gradient(135deg, #818CF8, #6366F1)', tailwind: 'bg-gradient-to-br from-primary-400 to-primary-500' },
          { name: 'Cool', value: 'linear-gradient(135deg, #0BA5EC, #6366F1)', tailwind: 'bg-gradient-to-br from-sky-500 to-primary-500' },
          { name: 'Warm', value: 'linear-gradient(135deg, #F79009, #D63F85)', tailwind: 'bg-gradient-to-br from-amber-500 to-pink-600' },
          { name: 'Subtle', value: 'linear-gradient(135deg, #EEF2FF, #FFF0F7)', tailwind: 'bg-gradient-to-br from-primary-50 to-pink-50' },
          { name: 'Dark', value: 'linear-gradient(135deg, #111122, #1E1E36)', tailwind: 'bg-gradient-to-br from-[#111122] to-[#1E1E36]' },
        ].map(g => (
          <div key={g.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: g.value, border: '1px solid rgba(0,0,0,0.06)', flexShrink: 0 }} />
            <div style={{ textAlign: 'left' }}>
              <p style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: 600, color: '#111122' }}>{g.name}</p>
              <code style={{ fontSize: '10px', color: '#6366F1' }}>{g.tailwind}</code>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Elevation / Shadow */}
    <section style={{ marginBottom: '56px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 20px', color: '#111122' }}>Elevation</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
        {[
          { name: 'None', shadow: 'none', tailwind: 'shadow-none' },
          { name: 'SM', shadow: '0 1px 2px rgba(0,0,0,0.06)', tailwind: 'shadow-sm' },
          { name: 'Default', shadow: '0 2px 8px rgba(0,0,0,0.08)', tailwind: 'shadow' },
          { name: 'MD', shadow: '0 4px 16px rgba(0,0,0,0.10)', tailwind: 'shadow-md' },
          { name: 'LG', shadow: '0 8px 24px rgba(0,0,0,0.12)', tailwind: 'shadow-lg' },
          { name: 'XL', shadow: '0 16px 40px rgba(0,0,0,0.16)', tailwind: 'shadow-xl' },
        ].map(e => (
          <div key={e.name} style={{ textAlign: 'center' }}>
            <div style={{
              height: '80px',
              borderRadius: '12px',
              background: '#FFFFFF',
              boxShadow: e.shadow,
              marginBottom: '10px',
              border: e.name === 'None' ? '1px solid #E4E4EE' : 'none',
            }} />
            <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#111122' }}>{e.name}</p>
            <code style={{ fontSize: '10px', color: '#6366F1' }}>{e.tailwind}</code>
          </div>
        ))}
      </div>
    </section>

    {/* Border Radius */}
    <section>
      <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 20px', color: '#111122' }}>Border Radius</h2>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {[
          { name: 'sm', value: '4px', tailwind: 'rounded-sm' },
          { name: 'md', value: '8px', tailwind: 'rounded-md' },
          { name: 'lg', value: '12px', tailwind: 'rounded-lg' },
          { name: 'xl', value: '16px', tailwind: 'rounded-xl' },
          { name: '2xl', value: '24px', tailwind: 'rounded-2xl' },
          { name: 'full', value: '9999px', tailwind: 'rounded-full' },
        ].map(r => (
          <div key={r.name} style={{ textAlign: 'center' }}>
            <div style={{
              width: '64px', height: '64px',
              background: 'var(--primary-background-subtle-1)',
              border: '2px solid var(--primary-background-decorative)',
              borderRadius: r.value,
              margin: '0 auto 8px',
            }} />
            <p style={{ margin: 0, fontSize: '12px', fontWeight: 600, color: '#111122' }}>{r.name}</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#9999B8' }}>{r.value}</p>
            <code style={{ fontSize: '10px', color: '#6366F1' }}>{r.tailwind}</code>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const meta: Meta<typeof StyleGuide> = {
  title: 'Foundation/Style',
  component: StyleGuide,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Typography, Gradient, Elevation, Border Radius 등 시각 스타일 가이드입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StyleGuide>;

export const Typography: Story = {};
