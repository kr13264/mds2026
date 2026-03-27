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
    color: '#9999B8',
    textAlign: 'center',
    padding: '48px 24px',
  }}>
    <div style={{
      width: '72px', height: '72px',
      borderRadius: '16px',
      background: '#F5F5F8',
      border: '2px dashed #DCDCE8',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '28px',
    }}>
      ⬡
    </div>
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#55557A', margin: '0 0 8px' }}>
        Icon — Coming Soon
      </h2>
      <p style={{ fontSize: '13px', color: '#9999B8', margin: 0, lineHeight: 1.6, maxWidth: '320px' }}>
        아이콘 라이브러리는 추후 추가될 예정입니다.
        <br />
        BON UI 아이콘 패키지 연동 후 업데이트됩니다.
      </p>
    </div>
    <div style={{
      padding: '10px 16px',
      borderRadius: '8px',
      background: '#EEF2FF',
      border: '1px solid #C7D2FE',
      fontSize: '12px',
      color: '#6366F1',
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
