import type { Meta, StoryObj } from '@storybook/react';

// TODO: Replace with actual component import
// import { Snackbar } from '@/components/Snackbar';

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
      background: '#EEF2FF', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      fontSize: '22px', color: '#6366F1',
    }}>⬒</div>
    <div>
      <h2 style={{ fontSize: '17px', fontWeight: '700', color: '#111122', margin: '0 0 6px' }}>
        Snackbar
      </h2>
      <p style={{ fontSize: '13px', color: '#55557A', margin: '0 0 4px', lineHeight: 1.6, maxWidth: '320px' }}>
        토스트/스낵바 알림 컴포넌트.
      </p>
      <p style={{ fontSize: '12px', color: '#9999B8', margin: 0 }}>
        SKILL.md 기준에 맞춰 작업 예정
      </p>
    </div>
    <div style={{
      padding: '8px 14px', borderRadius: '6px',
      background: '#F5F5F8', border: '1px solid #E4E4EE',
      fontSize: '11px', color: '#9999B8', fontFamily: 'monospace',
    }}>
      src/components/Snackbar/Snackbar.tsx
    </div>
  </div>
);

const meta: Meta<typeof ComingSoon> = {
  title: 'Components/Snackbar',
  component: ComingSoon,
  parameters: {
    layout: 'centered',
    docs: {
      description: { component: '토스트/스낵바 알림 컴포넌트.' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComingSoon>;

export const Default: Story = {};
