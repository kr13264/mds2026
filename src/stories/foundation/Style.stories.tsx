import type { Meta, StoryObj } from '@storybook/react';

// ── Shared ──────────────────────────────────────────────────────────────────
const token = (s: string) => (
  <code style={{ fontSize: '10px', color: 'var(--color-primary-foreground-default)', background: 'var(--color-primary-background-subtle-1)', padding: '1px 5px', borderRadius: '3px', fontFamily: 'monospace' }}>{s}</code>
);
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-neutral-foreground-default)', margin: '0 0 20px', letterSpacing: '-0.2px' }}>{children}</h2>
);

// ── Style Guide ─────────────────────────────────────────────────────────────
const StyleGuide = () => (
  <div style={{ background: 'var(--color-neutral-background-default)', minHeight: '100vh' }}>
  <div style={{ fontFamily: "'Pretendard', -apple-system, sans-serif", maxWidth: '960px', margin: '0 auto', padding: '40px' }}>

    <h1 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 8px', color: 'var(--color-neutral-foreground-default)', letterSpacing: '-0.5px' }}>
      Style Guide
    </h1>
    <p style={{ fontSize: '14px', color: 'var(--color-neutral-foreground-subtle-1)', margin: '0 0 48px', lineHeight: 1.6 }}>
      BON UI Sys 토큰 기준 — Typography · Gradient · Shadow · Elevation · Border Radius
    </p>

    {/* ── Typography ── */}
    <section style={{ marginBottom: '56px' }}>
      <SectionTitle>Typography — Pretendard</SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          { label: 'Display',  size: '32px', weight: 800, lh: '40px', tw: 'text-32 font-extrabold leading-40 tracking-bon-tightest' },
          { label: 'Title 1',  size: '24px', weight: 700, lh: '32px', tw: 'text-24 font-bold leading-32 tracking-bon-tighter' },
          { label: 'Title 2',  size: '20px', weight: 700, lh: '28px', tw: 'text-20 font-bold leading-28' },
          { label: 'Title 3',  size: '18px', weight: 600, lh: '26px', tw: 'text-18 font-semibold leading-26' },
          { label: 'Headline', size: '16px', weight: 600, lh: '24px', tw: 'text-16 font-semibold leading-24' },
          { label: 'Body 1',   size: '15px', weight: 400, lh: '22px', tw: 'text-15 font-normal leading-22' },
          { label: 'Body 2',   size: '14px', weight: 400, lh: '20px', tw: 'text-14 font-normal leading-20' },
          { label: 'Caption',  size: '13px', weight: 400, lh: '19px', tw: 'text-13 font-normal leading-19' },
          { label: 'Label',    size: '12px', weight: 600, lh: '16px', tw: 'text-12 font-semibold leading-16' },
          { label: 'Micro',    size: '11px', weight: 400, lh: '15px', tw: 'text-11 font-normal leading-15' },
        ].map(t => (
          <div key={t.label} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
            padding: '12px 16px', borderRadius: '8px',
            background: 'var(--color-neutral-background-raised-1)', border: '1px solid var(--color-neutral-stroke-divider)',
          }}>
            <span style={{ fontSize: t.size, fontWeight: t.weight, lineHeight: t.lh, color: 'var(--color-neutral-foreground-default)', flex: 1 }}>
              가나다 ABC abc 123
            </span>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p style={{ margin: '0 0 3px', fontSize: '11px', color: 'var(--color-neutral-foreground-subtle-1)' }}>
                {t.label} · {t.size} / {t.lh} · {t.weight}
              </p>
              {token(t.tw)}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── Gradient ── */}
    <section style={{ marginBottom: '56px' }}>
      <SectionTitle>Gradient — @bonui color stops</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '20px' }}>
        {[
          {
            name: 'AI',
            style: 'linear-gradient(135deg, var(--color-function-effect-gradation-ai-1), var(--color-function-effect-gradation-ai-3))',
            tw: 'from-gradient-ai-1 to-gradient-ai-3',
          },
          {
            name: 'Green Dot',
            style: 'linear-gradient(135deg, var(--color-function-effect-gradation-green-dot-1), var(--color-function-effect-gradation-green-dot-3))',
            tw: 'from-gradient-green-dot-1 to-gradient-green-dot-3',
          },
          {
            name: 'N Logo',
            style: 'linear-gradient(135deg, var(--color-function-effect-gradation-n-logo-1), var(--color-function-effect-gradation-n-logo-2))',
            tw: 'from-gradient-n-logo-1 to-gradient-n-logo-2',
          },
          {
            name: 'Placeholder',
            style: 'linear-gradient(90deg, var(--color-function-effect-gradation-placeholder-1), var(--color-function-effect-gradation-placeholder-2))',
            tw: 'from-gradient-placeholder-1 to-gradient-placeholder-2',
          },
          {
            name: 'Image Shadow',
            style: 'linear-gradient(180deg, var(--color-function-effect-gradation-image-shadow-1), var(--color-function-effect-gradation-image-shadow-2))',
            tw: 'from-[--color-function-effect-gradation-image-shadow-1] to-[--color-function-effect-gradation-image-shadow-2]',
          },
        ].map(g => (
          <div key={g.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '50%',
              background: g.style,
              border: '1px solid rgba(0,0,0,0.06)',
            }} />
            <div>
              <p style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: 600, color: 'var(--color-neutral-foreground-default)' }}>{g.name}</p>
              {token(`bg-gradient-to-br ${g.tw}`)}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── Shadow / Elevation ── */}
    <section style={{ marginBottom: '56px' }}>
      <SectionTitle>Shadow — Elevation</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>

        {/* BON UI Token */}
        <div>
          <div style={{
            height: '80px', borderRadius: '12px', background: 'var(--color-neutral-background-raised-1)', marginBottom: '10px',
            boxShadow: 'var(--shadow-light-neutral-default)',
          }} />
          <p style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: 600, color: 'var(--color-neutral-foreground-default)' }}>Neutral Default</p>
          <p style={{ margin: '0 0 3px', fontSize: '10px', color: 'var(--color-neutral-foreground-subtle-3)', fontFamily: 'monospace' }}>--shadow-light-neutral-default</p>
          {token('shadow')}
        </div>

        {/* Elevation values from @bonui core tokens */}
        {[
          { name: 'Elevation 1',  shadow: `0px 2px 4px 0px var(--core-elevation-opacity-3)`,                                                                    desc: 'blur-4 / opacity-3' },
          { name: 'Elevation 2',  shadow: `0px 3px 6px 0px var(--core-elevation-opacity-10), 0px 0px 6px 0px var(--core-elevation-opacity-4)`,                   desc: 'blur-6 / opacity-10+4' },
          { name: 'Elevation 3',  shadow: `0px 6px 12px 0px var(--core-elevation-opacity-10)`,                                                                   desc: 'blur-12 / opacity-10' },
          { name: 'Elevation 4',  shadow: `0px 8px 20px 0px var(--core-elevation-opacity-10)`,                                                                   desc: 'blur-20 / opacity-10' },
          { name: 'Elevation 5',  shadow: `0px 8px 40px 0px var(--core-elevation-opacity-10)`,                                                                   desc: 'blur-40 / opacity-10' },
        ].map(e => (
          <div key={e.name}>
            <div style={{
              height: '80px', borderRadius: '12px', background: 'var(--color-neutral-background-raised-1)', marginBottom: '10px',
              boxShadow: e.shadow,
              border: '1px solid rgba(0,0,0,0.04)',
            }} />
            <p style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: 600, color: 'var(--color-neutral-foreground-default)' }}>{e.name}</p>
            <p style={{ margin: 0, fontSize: '10px', color: 'var(--color-neutral-foreground-subtle-3)' }}>{e.desc}</p>
          </div>
        ))}

      </div>
    </section>

    {/* ── Border Radius ── */}
    <section>
      <SectionTitle>Border Radius</SectionTitle>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        {[
          { name: 'sm',   var: '--radius-2xs', value: '4px',   tw: 'rounded-sm' },
          { name: 'base', var: '--radius-xs',  value: '6px',   tw: 'rounded' },
          { name: 'md',   var: '--radius-s',   value: '8px',   tw: 'rounded-md' },
          { name: 'lg',   var: '--radius-m',   value: '12px',  tw: 'rounded-lg' },
          { name: 'xl',   var: '--radius-xl',  value: '20px',  tw: 'rounded-xl' },
          { name: '2xl',  var: '--radius-2xl', value: '24px',  tw: 'rounded-2xl' },
          { name: '3xl',  var: '--radius-3xl', value: '28px',  tw: 'rounded-3xl' },
          { name: 'full', var: '--radius-full',value: '999px', tw: 'rounded-full' },
        ].map(r => (
          <div key={r.name} style={{ textAlign: 'center' }}>
            <div style={{
              width: '64px', height: '64px', margin: '0 auto 8px',
              background: 'var(--color-primary-background-subtle-1)',
              border: '2px solid var(--color-primary-background-decorative)',
              borderRadius: `var(${r.var})`,
            }} />
            <p style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: 700, color: 'var(--color-neutral-foreground-default)' }}>{r.name}</p>
            <p style={{ margin: '0 0 3px', fontSize: '10px', color: 'var(--color-neutral-foreground-subtle-3)' }}>{r.value}</p>
            {token(r.tw)}
          </div>
        ))}
      </div>
    </section>

  </div>
  </div>
);

// ── Meta ────────────────────────────────────────────────────────────────────
const meta: Meta<typeof StyleGuide> = {
  title: 'Foundation/Style',
  component: StyleGuide,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'BON UI Sys 토큰 기준 — Typography · Gradient · Shadow · Elevation · Border Radius',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StyleGuide>;
export const Typography: Story = {};
