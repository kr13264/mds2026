import type { Meta, StoryObj } from '@storybook/react';

// ── Color Swatch Component ─────────────────────────────────────────────────
interface SwatchProps {
  name: string;
  variable: string;
  tailwind?: string;
}

const Swatch = ({ name, variable, tailwind }: SwatchProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    <div
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: `var(${variable})`,
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
        flexShrink: 0,
      }}
    />
    <div>
      <p style={{ margin: 0, fontSize: '11px', fontWeight: 600, color: '#111122', lineHeight: 1.4 }}>{name}</p>
      <p style={{ margin: 0, fontSize: '10px', color: '#9999B8', lineHeight: 1.4, fontFamily: 'monospace' }}>{variable}</p>
      {tailwind && (
        <p style={{ margin: 0, fontSize: '10px', color: '#6366F1', lineHeight: 1.4, fontFamily: 'monospace' }}>{tailwind}</p>
      )}
    </div>
  </div>
);

// ── Section Component ──────────────────────────────────────────────────────
interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Section = ({ title, description, children }: SectionProps) => (
  <div style={{ marginBottom: '48px' }}>
    <h2 style={{
      fontSize: '16px', fontWeight: '700', color: '#111122',
      margin: '0 0 4px', letterSpacing: '-0.2px',
    }}>{title}</h2>
    {description && (
      <p style={{ fontSize: '13px', color: '#55557A', margin: '0 0 16px', lineHeight: 1.6 }}>{description}</p>
    )}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: '12px',
      marginTop: '16px',
    }}>
      {children}
    </div>
  </div>
);

// ── Full Color Overview Page ───────────────────────────────────────────────
const ColorOverview = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    maxWidth: '960px',
    margin: '0 auto',
    padding: '40px 24px',
  }}>
    <div style={{ marginBottom: '40px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 8px', letterSpacing: '-0.5px', color: '#111122' }}>
        BON UI Color Tokens
      </h1>
      <p style={{ fontSize: '14px', color: '#55557A', margin: 0, lineHeight: 1.6 }}>
        BON UI 디자인 시스템의 컬러 토큰입니다. CSS 변수로 제공되며 Tailwind 클래스로 사용할 수 있습니다.
        실제 값은 <code style={{ background: '#EEF2FF', padding: '2px 6px', borderRadius: '4px', color: '#6366F1', fontSize: '12px' }}>@bonui/styles</code> 패키지에서 정의됩니다.
      </p>
    </div>

    {/* Neutral Background */}
    <Section title="Neutral — Background" description="배경색 토큰. 계층별 배경에 사용합니다.">
      <Swatch name="Default" variable="--neutral-background-default" tailwind="bg-neutral-background-default" />
      <Swatch name="Base Basic" variable="--neutral-background-base-basic" tailwind="bg-neutral-background-base-basic" />
      <Swatch name="Raised 1" variable="--neutral-background-raised-1" tailwind="bg-neutral-background-raised-1" />
      <Swatch name="Raised 2" variable="--neutral-background-raised-2" tailwind="bg-neutral-background-raised-2" />
      <Swatch name="Separated 1" variable="--neutral-background-separated-1" tailwind="bg-neutral-background-separated-1" />
      <Swatch name="Separated 2" variable="--neutral-background-separated-2" tailwind="bg-neutral-background-separated-2" />
      <Swatch name="Disabled" variable="--neutral-background-disabled" tailwind="bg-neutral-background-disabled" />
      <Swatch name="Inverted 1" variable="--neutral-background-inverted-1" tailwind="bg-neutral-background-inverted-1" />
      <Swatch name="Inverted 2" variable="--neutral-background-inverted-2" tailwind="bg-neutral-background-inverted-2" />
      <Swatch name="Static White" variable="--neutral-background-static-white" tailwind="bg-neutral-background-static-white" />
      <Swatch name="Static Black" variable="--neutral-background-static-black" tailwind="bg-neutral-background-static-black" />
      <Swatch name="Dimmed Ghost" variable="--neutral-background-dimmed-ghost" tailwind="bg-neutral-background-dimmed-ghost" />
    </Section>

    {/* Neutral Foreground */}
    <Section title="Neutral — Foreground" description="텍스트, 아이콘 색상 토큰.">
      <Swatch name="Default" variable="--neutral-foreground-default" tailwind="text-neutral-foreground-default" />
      <Swatch name="Subtle 1" variable="--neutral-foreground-subtle-1" tailwind="text-neutral-foreground-subtle-1" />
      <Swatch name="Subtle 2" variable="--neutral-foreground-subtle-2" tailwind="text-neutral-foreground-subtle-2" />
      <Swatch name="Subtle 3" variable="--neutral-foreground-subtle-3" tailwind="text-neutral-foreground-subtle-3" />
      <Swatch name="Disabled" variable="--neutral-foreground-disabled" tailwind="text-neutral-foreground-disabled" />
      <Swatch name="Inverted" variable="--neutral-foreground-inverted-default" tailwind="text-neutral-foreground-inverted-default" />
    </Section>

    {/* Neutral Stroke */}
    <Section title="Neutral — Stroke" description="테두리, 구분선 색상 토큰.">
      <Swatch name="Default" variable="--neutral-stroke-default" tailwind="border-neutral-stroke-default" />
      <Swatch name="Subtle 1" variable="--neutral-stroke-subtle-1" tailwind="border-neutral-stroke-subtle-1" />
      <Swatch name="Subtle 2" variable="--neutral-stroke-subtle-2" tailwind="border-neutral-stroke-subtle-2" />
      <Swatch name="Divider" variable="--neutral-stroke-divider" tailwind="border-neutral-stroke-divider" />
      <Swatch name="Emphasis" variable="--neutral-stroke-emphasis" tailwind="border-neutral-stroke-emphasis" />
    </Section>

    {/* Primary */}
    <Section title="Primary" description="주요 인터랙션, 강조 요소에 사용하는 Primary 컬러.">
      <Swatch name="Background" variable="--primary-background-default" tailwind="bg-primary-background-default" />
      <Swatch name="Bg Subtle 1" variable="--primary-background-subtle-1" tailwind="bg-primary-background-subtle-1" />
      <Swatch name="Bg Subtle 2" variable="--primary-background-subtle-2" tailwind="bg-primary-background-subtle-2" />
      <Swatch name="Bg Decorative" variable="--primary-background-decorative" tailwind="bg-primary-background-decorative" />
      <Swatch name="Foreground" variable="--primary-foreground-default" tailwind="text-primary-foreground-default" />
      <Swatch name="Fg Subtle" variable="--primary-foreground-subtle" tailwind="text-primary-foreground-subtle" />
      <Swatch name="Stroke" variable="--primary-stroke-default" tailwind="border-primary-stroke-default" />
    </Section>

    {/* Secondary */}
    <Section title="Secondary" description="보조 강조 컬러. 주로 포인트 컬러로 사용.">
      <Swatch name="Background" variable="--secondary-background-default" tailwind="bg-secondary-background-default" />
      <Swatch name="Bg Subtle 1" variable="--secondary-background-subtle-1" tailwind="bg-secondary-background-subtle-1" />
      <Swatch name="Foreground" variable="--secondary-foreground-default" tailwind="text-secondary-foreground-default" />
      <Swatch name="Stroke" variable="--secondary-stroke-default" tailwind="border-secondary-stroke-default" />
    </Section>

    {/* Function */}
    <Section title="Function — Semantic" description="상태 표현을 위한 시맨틱 컬러 (성공, 오류, 경고, 정보).">
      <Swatch name="Positive" variable="--function-common-positive-default" tailwind="text-function-positive-default" />
      <Swatch name="Positive Subtle" variable="--function-common-positive-subtle" tailwind="bg-function-positive-subtle" />
      <Swatch name="Negative" variable="--function-common-negative-default" tailwind="text-function-negative-default" />
      <Swatch name="Negative Subtle" variable="--function-common-negative-subtle" tailwind="bg-function-negative-subtle" />
      <Swatch name="Attention" variable="--function-common-attention-default" tailwind="text-function-attention-default" />
      <Swatch name="Attention Subtle" variable="--function-common-attention-subtle" tailwind="bg-function-attention-subtle" />
      <Swatch name="Informative" variable="--function-common-informative-default" tailwind="text-function-informative-default" />
      <Swatch name="Info Subtle" variable="--function-common-informative-subtle" tailwind="bg-function-informative-subtle" />
    </Section>
  </div>
);

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof ColorOverview> = {
  title: 'Foundation/BON UI Colors',
  component: ColorOverview,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'BON UI 디자인 시스템의 컬러 토큰. CSS 변수 + Tailwind 클래스로 사용 가능합니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorOverview>;

export const Overview: Story = {};
