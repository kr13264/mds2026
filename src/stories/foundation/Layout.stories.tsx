import type { Meta, StoryObj } from '@storybook/react';

// ── Layout Showcase ────────────────────────────────────────────────────────
const Box = ({ label, span }: { label: string; span?: string }) => (
  <div
    style={{
      background: 'var(--color-primary-background-subtle-1)',
      border: '1px dashed var(--color-primary-background-decorative)',
      borderRadius: '6px',
      padding: '12px',
      textAlign: 'center',
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--color-primary-foreground-default)',
      gridColumn: span,
    }}
  >
    {label}
  </div>
);

const LayoutGuide = () => (
  <div style={{ background: 'var(--color-neutral-background-default)', minHeight: '100vh' }}>
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    maxWidth: '960px',
    margin: '0 auto',
    padding: '40px',
  }}>
    <h1 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 8px', color: 'var(--color-neutral-foreground-default)', letterSpacing: '-0.5px' }}>
      Layout System
    </h1>
    <p style={{ fontSize: '14px', color: 'var(--color-neutral-foreground-subtle-1)', margin: '0 0 40px', lineHeight: 1.6 }}>
      12-column grid 기반의 반응형 레이아웃 시스템입니다. Tailwind의 breakpoint를 활용합니다.
    </p>

    {/* Breakpoints */}
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 16px', color: 'var(--color-neutral-foreground-default)' }}>Breakpoints</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
        {[
          { name: 'Base', size: '< 640px', prefix: '—', desc: '모바일 세로' },
          { name: 'sm', size: '640px', prefix: 'sm:', desc: '모바일 가로' },
          { name: 'md', size: '768px', prefix: 'md:', desc: '태블릿' },
          { name: 'lg', size: '1024px', prefix: 'lg:', desc: '데스크탑 소형' },
          { name: 'xl', size: '1280px', prefix: 'xl:', desc: '데스크탑' },
          { name: '2xl', size: '1536px', prefix: '2xl:', desc: '와이드' },
        ].map(bp => (
          <div key={bp.name} style={{
            padding: '16px',
            borderRadius: '8px',
            background: 'var(--color-neutral-background-raised-1)',
            border: '1px solid var(--color-neutral-stroke-divider)',
          }}>
            <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: '700', color: 'var(--color-neutral-foreground-default)' }}>{bp.name}</p>
            <p style={{ margin: '0 0 4px', fontSize: '12px', color: 'var(--color-primary-foreground-default)', fontFamily: 'monospace', fontWeight: 600 }}>{bp.prefix}</p>
            <p style={{ margin: '0 0 2px', fontSize: '11px', color: 'var(--color-neutral-foreground-subtle-1)' }}>{bp.size}</p>
            <p style={{ margin: 0, fontSize: '11px', color: 'var(--color-neutral-foreground-subtle-3)' }}>{bp.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 12-column grid */}
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 8px', color: 'var(--color-neutral-foreground-default)' }}>12 Column Grid</h2>
      <p style={{ fontSize: '13px', color: 'var(--color-neutral-foreground-subtle-1)', margin: '0 0 16px' }}>
        <code style={{ background: 'var(--color-primary-background-subtle-1)', padding: '2px 6px', borderRadius: '4px', color: 'var(--color-primary-foreground-default)', fontSize: '11px' }}>
          grid grid-cols-12 gap-4
        </code>
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '8px' }}>
        {Array.from({ length: 12 }, (_, i) => (
          <Box key={i} label={String(i + 1)} />
        ))}
        <Box label="col-span-4" span="span 4" />
        <Box label="col-span-4" span="span 4" />
        <Box label="col-span-4" span="span 4" />
        <Box label="col-span-8" span="span 8" />
        <Box label="col-span-4" span="span 4" />
        <Box label="col-span-6" span="span 6" />
        <Box label="col-span-6" span="span 6" />
        <Box label="col-span-12" span="span 12" />
      </div>
    </section>

    {/* Container sizes */}
    <section style={{ marginBottom: '48px' }}>
      <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 16px', color: 'var(--color-neutral-foreground-default)' }}>Container</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          { name: 'sm', width: '640px', usage: 'container sm:max-w-screen-sm' },
          { name: 'md', width: '768px', usage: 'container md:max-w-screen-md' },
          { name: 'lg', width: '1024px', usage: 'container lg:max-w-screen-lg' },
          { name: 'xl', width: '1280px', usage: 'container xl:max-w-screen-xl' },
        ].map(c => (
          <div key={c.name} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 16px', borderRadius: '8px',
            background: 'var(--color-neutral-background-raised-1)', border: '1px solid var(--color-neutral-stroke-divider)',
          }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-neutral-foreground-default)' }}>{c.width}</span>
            <code style={{ fontSize: '11px', color: 'var(--color-primary-foreground-default)', background: 'var(--color-primary-background-subtle-1)', padding: '3px 8px', borderRadius: '4px' }}>{c.usage}</code>
          </div>
        ))}
      </div>
    </section>

    {/* Spacing */}
    <section>
      <h2 style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 16px', color: 'var(--color-neutral-foreground-default)' }}>Spacing Scale</h2>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map(n => (
          <div key={n} style={{ textAlign: 'center' }}>
            <div style={{
              width: `${n * 4}px`,
              height: `${n * 4}px`,
              background: 'var(--color-primary-background-decorative)',
              borderRadius: '4px',
              margin: '0 auto 4px',
              minWidth: '4px',
            }} />
            <p style={{ margin: 0, fontSize: '10px', color: 'var(--color-neutral-foreground-subtle-3)', fontFamily: 'monospace' }}>{n}</p>
            <p style={{ margin: 0, fontSize: '9px', color: 'var(--color-neutral-foreground-disabled)' }}>{n * 4}px</p>
          </div>
        ))}
      </div>
    </section>
  </div>
  </div>
);

const meta: Meta<typeof LayoutGuide> = {
  title: 'Foundation/Layout',
  component: LayoutGuide,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '12컬럼 그리드 기반의 반응형 레이아웃 시스템 가이드입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LayoutGuide>;

export const Grid: Story = {};
