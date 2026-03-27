import type { Meta, StoryObj } from '@storybook/react';

const FormPageTemplate = () => (
  <div style={{
    fontFamily: "'Pretendard', -apple-system, sans-serif",
    minHeight: '100vh',
    background: 'var(--neutral-background-default)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 24px',
  }}>
    <div style={{
      width: '100%',
      maxWidth: '480px',
      background: 'var(--neutral-background-base-basic)',
      borderRadius: '16px',
      border: '1px solid var(--neutral-stroke-divider)',
      padding: '40px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px',
          background: 'linear-gradient(135deg, #6366F1, #D63F85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '18px', fontWeight: '800',
          margin: '0 auto 14px',
        }}>M</div>
        <h1 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 6px', letterSpacing: '-0.3px', color: 'var(--neutral-foreground-default)' }}>
          시작하기
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--neutral-foreground-subtle-1)', margin: 0, lineHeight: 1.6 }}>
          MDS Design System에 오신 걸 환영합니다
        </p>
      </div>

      {/* Form Fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
        {/* Name */}
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--neutral-foreground-default)', marginBottom: '6px' }}>
            이름 <span style={{ color: 'var(--function-common-negative-default)' }}>*</span>
          </label>
          <input
            type="text"
            placeholder="홍길동"
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1.5px solid var(--neutral-stroke-default)',
              background: 'var(--neutral-background-base-basic)',
              fontSize: '13px',
              color: 'var(--neutral-foreground-default)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Email */}
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--neutral-foreground-default)', marginBottom: '6px' }}>
            이메일 <span style={{ color: 'var(--function-common-negative-default)' }}>*</span>
          </label>
          <input
            type="email"
            placeholder="hello@navercorp.com"
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1.5px solid var(--primary-stroke-default)',
              background: 'var(--neutral-background-base-basic)',
              fontSize: '13px',
              color: 'var(--neutral-foreground-default)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <p style={{ fontSize: '11px', color: 'var(--neutral-foreground-subtle-2)', margin: '5px 0 0' }}>
            회사 이메일을 입력해주세요.
          </p>
        </div>

        {/* Password */}
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--neutral-foreground-default)', marginBottom: '6px' }}>
            비밀번호 <span style={{ color: 'var(--function-common-negative-default)' }}>*</span>
          </label>
          <input
            type="password"
            placeholder="8자 이상 입력"
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1.5px solid var(--function-common-negative-default)',
              background: 'var(--neutral-background-base-basic)',
              fontSize: '13px',
              color: 'var(--neutral-foreground-default)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <p style={{ fontSize: '11px', color: 'var(--function-common-negative-default)', margin: '5px 0 0' }}>
            비밀번호는 8자 이상이어야 합니다.
          </p>
        </div>

        {/* Role Select */}
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--neutral-foreground-default)', marginBottom: '6px' }}>
            역할
          </label>
          <select style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1.5px solid var(--neutral-stroke-default)',
            background: 'var(--neutral-background-base-basic)',
            fontSize: '13px',
            color: 'var(--neutral-foreground-default)',
            outline: 'none',
            boxSizing: 'border-box',
            appearance: 'none',
          }}>
            <option>역할을 선택하세요</option>
            <option>디자이너</option>
            <option>프론트엔드 개발자</option>
            <option>백엔드 개발자</option>
            <option>PM</option>
          </select>
        </div>

        {/* Textarea */}
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--neutral-foreground-default)', marginBottom: '6px' }}>
            메모 <span style={{ fontSize: '11px', color: 'var(--neutral-foreground-subtle-2)', fontWeight: 400 }}>(선택)</span>
          </label>
          <textarea
            placeholder="자유롭게 작성해주세요."
            rows={3}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1.5px solid var(--neutral-stroke-default)',
              background: 'var(--neutral-background-base-basic)',
              fontSize: '13px',
              color: 'var(--neutral-foreground-default)',
              outline: 'none',
              resize: 'vertical',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
            }}
          />
        </div>
      </div>

      {/* Submit */}
      <button style={{
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        background: '#6366F1',
        color: '#FFFFFF',
        fontSize: '14px',
        fontWeight: '700',
        border: 'none',
        cursor: 'pointer',
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(99,102,241,0.25)',
      }}>
        계정 만들기
      </button>

      <p style={{ fontSize: '12px', color: 'var(--neutral-foreground-subtle-2)', textAlign: 'center', margin: 0 }}>
        이미 계정이 있으신가요?{' '}
        <span style={{ color: 'var(--primary-foreground-default)', fontWeight: 600, cursor: 'pointer' }}>로그인</span>
      </p>
    </div>
  </div>
);

const meta: Meta<typeof FormPageTemplate> = {
  title: 'Templates/Form Page',
  component: FormPageTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '인증/가입/설정 등에 사용하는 단일 컬럼 폼 페이지 레이아웃 템플릿.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormPageTemplate>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
};
