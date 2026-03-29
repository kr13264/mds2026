import type { Meta, StoryObj } from '@storybook/react';

// ── Color Swatch ────────────────────────────────────────────────────────────
const Swatch = ({ name, variable, tailwind }: { name: string; variable: string; tailwind?: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    <div style={{
      width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
      backgroundColor: `var(${variable})`,
      border: '1px solid var(--color-neutral-stroke-divider)',
    }} />
    <div>
      <p style={{ margin: 0, fontSize: '11px', fontWeight: 600, color: 'var(--color-neutral-foreground-default)', lineHeight: 1.4 }}>{name}</p>
      <p style={{ margin: 0, fontSize: '10px', color: 'var(--color-neutral-foreground-subtle-3)', lineHeight: 1.4, fontFamily: 'monospace' }}>{variable}</p>
      {tailwind && (
        <p style={{ margin: 0, fontSize: '10px', color: 'var(--color-primary-foreground-default)', lineHeight: 1.4, fontFamily: 'monospace' }}>{tailwind}</p>
      )}
    </div>
  </div>
);

// ── Section ─────────────────────────────────────────────────────────────────
const Section = ({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '48px' }}>
    <h2 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-neutral-foreground-default)', margin: '0 0 4px', letterSpacing: '-0.2px' }}>{title}</h2>
    {description && <p style={{ fontSize: '13px', color: 'var(--color-neutral-foreground-subtle-1)', margin: '0 0 16px', lineHeight: 1.6 }}>{description}</p>}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px', marginTop: '16px' }}>
      {children}
    </div>
  </div>
);

// ── Page ────────────────────────────────────────────────────────────────────
const ColorOverview = () => (
  <div style={{ background: 'var(--color-neutral-background-default)', minHeight: '100vh' }}>
  <div style={{ fontFamily: "'Pretendard', sans-serif", maxWidth: '960px', margin: '0 auto', padding: '40px' }}>

    <div style={{ marginBottom: '40px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px', color: 'var(--color-neutral-foreground-default)' }}>
        BON UI Color Tokens
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--color-neutral-foreground-subtle-1)', margin: 0, lineHeight: 1.6 }}>
        <code style={{ background: 'var(--color-primary-background-subtle-1)', padding: '2px 6px', borderRadius: '4px', color: 'var(--color-primary-foreground-default)', fontSize: '12px' }}>@bonui/styles</code>
        {' '}Sys 토큰 기준. CSS 변수(
        <code style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--color-neutral-foreground-subtle-2)' }}>--color-*</code>
        )와 Tailwind 클래스로 사용합니다.
      </p>
    </div>

    {/* Neutral – Background */}
    <Section title="Neutral — Background" description="레이어 계층별 배경색">
      <Swatch name="Default"      variable="--color-neutral-background-default"    tailwind="bg-neutral-background-default" />
      <Swatch name="Base Basic"   variable="--color-neutral-background-base-basic"  tailwind="bg-neutral-background-base-basic" />
      <Swatch name="Raised 1"     variable="--color-neutral-background-raised-1"    tailwind="bg-neutral-background-raised-1" />
      <Swatch name="Raised 2"     variable="--color-neutral-background-raised-2"    tailwind="bg-neutral-background-raised-2" />
      <Swatch name="Separated 1"  variable="--color-neutral-background-separated-1" tailwind="bg-neutral-background-separated-1" />
      <Swatch name="Separated 2"  variable="--color-neutral-background-separated-2" tailwind="bg-neutral-background-separated-2" />
      <Swatch name="Disabled"     variable="--color-neutral-background-disabled"    tailwind="bg-neutral-background-disabled" />
      <Swatch name="Inverted 1"   variable="--color-neutral-background-inverted-1"  tailwind="bg-neutral-background-inverted-1" />
      <Swatch name="Static White" variable="--color-neutral-background-static-white" tailwind="bg-neutral-background-static-white" />
      <Swatch name="Static Black" variable="--color-neutral-background-static-black" tailwind="bg-neutral-background-static-black" />
      <Swatch name="Dimmed Default" variable="--color-neutral-background-dimmed-default" tailwind="bg-neutral-background-dimmed-default" />
      <Swatch name="Dimmed Ghost" variable="--color-neutral-background-dimmed-ghost" tailwind="bg-neutral-background-dimmed-ghost" />
    </Section>

    {/* Neutral – Foreground */}
    <Section title="Neutral — Foreground" description="텍스트 및 아이콘 색상">
      <Swatch name="Default"   variable="--color-neutral-foreground-default"          tailwind="text-neutral-foreground-default" />
      <Swatch name="Subtle 1"  variable="--color-neutral-foreground-subtle-1"         tailwind="text-neutral-foreground-subtle-1" />
      <Swatch name="Subtle 2"  variable="--color-neutral-foreground-subtle-2"         tailwind="text-neutral-foreground-subtle-2" />
      <Swatch name="Subtle 3"  variable="--color-neutral-foreground-subtle-3"         tailwind="text-neutral-foreground-subtle-3" />
      <Swatch name="Disabled"  variable="--color-neutral-foreground-disabled"         tailwind="text-neutral-foreground-disabled" />
      <Swatch name="Inverted"  variable="--color-neutral-foreground-inverted-default" tailwind="text-neutral-foreground-inverted-default" />
    </Section>

    {/* Neutral – Stroke */}
    <Section title="Neutral — Stroke" description="테두리 및 구분선 색상">
      <Swatch name="Default"  variable="--color-neutral-stroke-default"  tailwind="border-neutral-stroke-default" />
      <Swatch name="Subtle 1" variable="--color-neutral-stroke-subtle-1" tailwind="border-neutral-stroke-subtle-1" />
      <Swatch name="Subtle 2" variable="--color-neutral-stroke-subtle-2" tailwind="border-neutral-stroke-subtle-2" />
      <Swatch name="Divider"  variable="--color-neutral-stroke-divider"  tailwind="border-neutral-stroke-divider" />
      <Swatch name="Emphasis" variable="--color-neutral-stroke-emphasis" tailwind="border-neutral-stroke-emphasis" />
    </Section>

    {/* Primary */}
    <Section title="Primary" description="주요 액션 및 브랜드 강조 색상">
      <Swatch name="Background"    variable="--color-primary-background-default"    tailwind="bg-primary-background-default" />
      <Swatch name="Bg Subtle 1"   variable="--color-primary-background-subtle-1"   tailwind="bg-primary-background-subtle-1" />
      <Swatch name="Bg Subtle 2"   variable="--color-primary-background-subtle-2"   tailwind="bg-primary-background-subtle-2" />
      <Swatch name="Bg Decorative" variable="--color-primary-background-decorative" tailwind="bg-primary-background-decorative" />
      <Swatch name="Foreground"    variable="--color-primary-foreground-default"    tailwind="text-primary-foreground-default" />
      <Swatch name="Fg Subtle"     variable="--color-primary-foreground-subtle"     tailwind="text-primary-foreground-subtle" />
      <Swatch name="Stroke"        variable="--color-primary-stroke-default"        tailwind="border-primary-stroke-default" />
    </Section>

    {/* Secondary */}
    <Section title="Secondary" description="보조 강조 색상">
      <Swatch name="Background"  variable="--color-secondary-background-default"  tailwind="bg-secondary-background-default" />
      <Swatch name="Bg Subtle 1" variable="--color-secondary-background-subtle-1" tailwind="bg-secondary-background-subtle-1" />
      <Swatch name="Foreground"  variable="--color-secondary-foreground-default"  tailwind="text-secondary-foreground-default" />
      <Swatch name="Stroke"      variable="--color-secondary-stroke-default"      tailwind="border-secondary-stroke-default" />
    </Section>

    {/* Function */}
    <Section title="Function — Semantic" description="상태 표현용 시맨틱 색상 (성공 / 오류 / 경고 / 정보)">
      <Swatch name="Positive"         variable="--color-function-common-positive-default"    tailwind="text-function-positive-default" />
      <Swatch name="Positive Subtle"  variable="--color-function-common-positive-subtle"     tailwind="bg-function-positive-subtle" />
      <Swatch name="Negative"         variable="--color-function-common-negative-default"    tailwind="text-function-negative-default" />
      <Swatch name="Negative Subtle"  variable="--color-function-common-negative-subtle"     tailwind="bg-function-negative-subtle" />
      <Swatch name="Attention"        variable="--color-function-common-attention-default"   tailwind="text-function-attention-default" />
      <Swatch name="Attention Subtle" variable="--color-function-common-attention-subtle"    tailwind="bg-function-attention-subtle" />
      <Swatch name="Informative"      variable="--color-function-common-informative-default" tailwind="text-function-informative-default" />
      <Swatch name="Info Subtle"      variable="--color-function-common-informative-subtle"  tailwind="bg-function-informative-subtle" />
    </Section>

  </div>
  </div>
);

// ── Meta ────────────────────────────────────────────────────────────────────
const meta: Meta<typeof ColorOverview> = {
  title: 'Foundation/Colors',
  component: ColorOverview,
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'BON UI Sys 컬러 토큰. CSS 변수(--color-*) + Tailwind 클래스로 사용합니다.' } },
  },
};

export default meta;
type Story = StoryObj<typeof ColorOverview>;
export const Overview: Story = {};
