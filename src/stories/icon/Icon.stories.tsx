import type { Meta, StoryObj } from '@storybook/react';

const IconPlaceholder = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '320px',
    gap: '16px',
    color: 'var(--color-neutral-foreground-subtle-3)',
    textAlign: 'center',
    padding: '48px 24px',
  }}>
    <div style={{
      width: '72px', height: '72px',
      borderRadius: '16px',
      background: 'var(--color-neutral-background-separated-1)',
      border: '2px dashed var(--color-neutral-stroke-divider)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '28px',
    }}>
      ⬡
    </div>
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-neutral-foreground-subtle-1)', margin: '0 0 8px' }}>
        Icon — Coming Soon
      </h2>
      <p style={{ fontSize: '13px', color: 'var(--color-neutral-foreground-subtle-3)', margin: 0, lineHeight: 1.6, maxWidth: '320px' }}>
        아이콘 라이브러리는 추후 추가될 예정입니다.
        <br />
        BON UI 아이콘 패키지 연동 후 업데이트됩니다.
      </p>
    </div>
    <div style={{
      padding: '10px 16px',
      borderRadius: '8px',
      background: 'var(--color-primary-background-subtle-1)',
      border: '1px solid var(--color-primary-background-decorative)',
      fontSize: '12px',
      color: 'var(--color-primary-foreground-default)',
      fontFamily: 'monospace',
    }}>
      pnpm install @bonui/icons
    </div>
  </div>
);

const meta: Meta<typeof IconPlaceholder> = {
  title: 'Icon/Overview',
  component: IconPlaceholder,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '아이콘 라이브러리. 추후 업데이트 예정입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconPlaceholder>;

export const Placeholder: Story = {};
