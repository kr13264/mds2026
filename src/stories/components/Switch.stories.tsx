import type { Meta, StoryObj } from '@storybook/react';

// TODO: Replace with actual component import
// import { Switch } from '@/components/Switch';

const ComingSoon = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '280px',
    gap: '12px',
    padding: '40px 24px',
    textAlign: 'center',
  }}>
    <div style={{
      width: '56px', height: '56px', borderRadius: '12px',
      background: 'var(--color-primary-background-subtle-1)', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      fontSize: '22px', color: 'var(--color-primary-foreground-default)',
    }}>⬒</div>
    <div>
      <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--color-neutral-foreground-default)', margin: '0 0 6px' }}>
        Switch
      </h2>
      <p style={{ fontSize: '13px', color: 'var(--color-neutral-foreground-subtle-1)', margin: '0 0 4px', lineHeight: 1.6, maxWidth: '320px' }}>
        BON UI Switch 기반의 토글 스위치 컴포넌트.
      </p>
      <p style={{ fontSize: '12px', color: 'var(--color-neutral-foreground-subtle-3)', margin: 0 }}>
        SKILL.md 기준에 맞춰 작업 예정
      </p>
    </div>
    <div style={{
      padding: '8px 14px', borderRadius: '6px',
      background: 'var(--color-neutral-background-separated-1)', border: '1px solid var(--color-neutral-stroke-divider)',
      fontSize: '11px', color: 'var(--color-neutral-foreground-subtle-3)', fontFamily: 'monospace',
    }}>
      src/components/Switch/Switch.tsx
    </div>
  </div>
);

const meta: Meta<typeof ComingSoon> = {
  title: 'Components/Switch',
  component: ComingSoon,
  parameters: {
    layout: 'centered',
    docs: {
      description: { component: 'BON UI Switch 기반의 토글 스위치 컴포넌트.' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComingSoon>;

export const Default: Story = {};
