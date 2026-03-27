import type { Meta, StoryObj } from '@storybook/react';
import { ProfileHorizontal } from '@/components/Profile';
import type { ProfileHorizontalProps } from '@/components/Profile';

type ProfileSize = 'default' | 'small';

// ── 레이아웃 헬퍼 ───────────────────────────────────────────────────────────
const Row = ({ children, gap = 24 }: { children: React.ReactNode; gap?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap }}>{children}</div>
);

const Block = ({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      fontFamily: 'Pretendard, sans-serif',
      fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
      textTransform: 'uppercase', color: '#9999B8', margin: '0 0 4px',
    }}>{label}</p>
    {desc && <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 12, color: '#55557A', margin: '0 0 12px', lineHeight: 1.6 }}>{desc}</p>}
    {children}
  </div>
);

// ── Sample avatar ─────────────────────────────────────────────────────────────
const AVATAR = 'https://i.pravatar.cc/150?img=3';

// ── Meta ─────────────────────────────────────────────────────────────────────
const meta: Meta<typeof ProfileHorizontal> = {
  title: 'Components/Profile/Horizontal',
  component: ProfileHorizontal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
아바타와 텍스트를 **가로로 배치**하는 프로필 컴포넌트입니다.
아바타 이미지, 프로필명, 서브 레이블(점 구분자), 하단 서브 텍스트(시간 등)를 수평으로 표시합니다.

---

<div style="margin-bottom:30px"></div>

### Size

| Size | Avatar | Font Size | Usage |
|------|--------|-----------|-------|
| \`default\` | 36px | 14px | 일반적인 프로필 목록 |
| \`small\` | 28px | 13px | 공간이 좁은 영역 또는 보조 목록 |

### Emphasis

| Emphasis | fontWeight | Description |
|----------|------------|-------------|
| \`false\` | 400 (Regular) | 기본 상태 |
| \`true\` | 600 (SemiBold) | 이름을 강조해야 하는 경우 |

### Selected

| Selected | Description |
|----------|-------------|
| \`false\` | 기본 상태 |
| \`true\` | 선택된 채널 — 아바타에 파란 테두리(#3283fd) 표시 |

### Contents

| Slot | Type | Description |
|------|------|-------------|
| \`src\` | string | 아바타 이미지 URL (없으면 기본 플레이스홀더) |
| \`name\` | string | 프로필/채널 이름 |
| \`sub\` | string | 이름 옆 서브 레이블 (점 구분자로 연결) |
| \`info\` | string | 하단 서브 텍스트 (시간, 채널 정보 등) |

\`\`\`tsx
import { ProfileHorizontal } from '@/components/Profile';

<ProfileHorizontal name="홍길동" info="3분 전" src="..." />
<ProfileHorizontal size="small" emphasis selected name="채널명" sub="레이블" info="방금 전" src="..." />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small'] satisfies ProfileSize[],
      description: '아바타 사이즈 (default=36px · small=28px)',
      table: {
        type: { summary: 'ProfileSize' },
        defaultValue: { summary: 'default' },
      },
    },
    emphasis: {
      control: 'boolean',
      description: '이름 강조 — fontWeight 400 → 600',
      table: { defaultValue: { summary: 'false' } },
    },
    selected: {
      control: 'boolean',
      description: '선택 상태 — 아바타에 파란 테두리(#3283fd) 표시',
      table: { defaultValue: { summary: 'false' } },
    },
    src: {
      control: 'text',
      description: '아바타 이미지 URL',
    },
    name: {
      control: 'text',
      description: '프로필/채널 이름',
      table: { defaultValue: { summary: '프로필명' } },
    },
    sub: {
      control: 'text',
      description: '이름 옆 서브 레이블 (점 구분자로 연결)',
    },
    label: {
      control: 'boolean',
      description: '서브 레이블 표시 여부',
      table: { defaultValue: { summary: 'true' } },
    },
    info: {
      control: 'text',
      description: '하단 서브 텍스트 (시간, 채널 정보 등)',
    },
    date: {
      control: 'boolean',
      description: '하단 서브 텍스트 표시 여부',
      table: { defaultValue: { summary: 'true' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileHorizontal>;

// ── Playground ────────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    size: 'default',
    emphasis: false,
    selected: false,
    name: '홍길동',
    sub: '레이블',
    label: true,
    info: '3분 전',
    date: true,
    src: AVATAR,
  },
};

// ── Size ──────────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  name: 'Size',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="Measurement" desc="Avatar 크기 기준으로 정의됩니다.">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E4E4EE' }}>
                {['Attribute', 'default', 'small'].map(h => (
                  <th key={h} style={{ padding: '8px 24px', textAlign: 'center', fontWeight: 700, color: '#55557A' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Avatar size', '36px', '28px'],
                ['Font size', '14px', '13px'],
                ['Line height', '19px', '19px'],
              ].map(row => (
                <tr key={row[0]} style={{ borderBottom: '1px solid #F0F0F8' }}>
                  {row.map((cell, i) => (
                    <td key={i} style={{ padding: '8px 24px', textAlign: 'center', color: i === 0 ? '#55557A' : '#111122', fontWeight: i === 0 ? 600 : 400 }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="Usage">
        <Row gap={32}>
          {(['default', 'small'] as ProfileSize[]).map(s => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <ProfileHorizontal size={s} name="홍길동" info="3분 전" src={AVATAR} />
              <code style={{ fontFamily: 'monospace', fontSize: 11, color: '#9999B8' }}>size="{s}"</code>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Emphasis ──────────────────────────────────────────────────────────────────
export const Emphasis: Story = {
  name: 'Emphasis',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="emphasis=false" desc="기본 상태. fontWeight 400 (Regular).">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" src={AVATAR} emphasis={false} />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" src={AVATAR} emphasis={false} />
        </Row>
      </Block>
      <Block label="emphasis=true" desc="이름을 강조할 때 사용합니다. fontWeight 600 (SemiBold).">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" src={AVATAR} emphasis={true} />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" src={AVATAR} emphasis={true} />
        </Row>
      </Block>
    </div>
  ),
};

// ── Selected ──────────────────────────────────────────────────────────────────
export const Selected: Story = {
  name: 'Selected',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="selected=false" desc="기본 상태.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" src={AVATAR} selected={false} />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" src={AVATAR} selected={false} />
        </Row>
      </Block>
      <Block label="selected=true" desc="선택된 채널. 아바타 주변에 파란 테두리(#3283fd)가 표시됩니다.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" src={AVATAR} selected={true} />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" src={AVATAR} selected={true} />
        </Row>
      </Block>
    </div>
  ),
};

// ── Contents ──────────────────────────────────────────────────────────────────
export const Contents: Story = {
  name: 'Contents',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="src (이미지 있음)" desc="아바타 이미지 URL을 전달합니다.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" src={AVATAR} />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" src={AVATAR} />
        </Row>
      </Block>
      <Block label="src 없음 (플레이스홀더)" desc="src가 없으면 기본 그라디언트 플레이스홀더가 표시됩니다.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" info="3분 전" />
          <ProfileHorizontal size="small" name="홍길동" info="3분 전" />
        </Row>
      </Block>
      <Block label="sub 있음" desc="이름 옆에 점 구분자와 함께 서브 레이블이 표시됩니다.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" sub="레이블" info="3분 전" src={AVATAR} />
          <ProfileHorizontal size="small" name="홍길동" sub="레이블" info="3분 전" src={AVATAR} />
        </Row>
      </Block>
      <Block label="info 없음" desc="info prop을 생략하면 이름(+sub)만 표시됩니다.">
        <Row gap={32}>
          <ProfileHorizontal name="홍길동" sub="레이블" src={AVATAR} />
          <ProfileHorizontal size="small" name="홍길동" src={AVATAR} />
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ────────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const sizes: ProfileSize[] = ['default', 'small'];
    const emphasisOpts = [false, true];
    const selectedOpts = [false, true];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                size \ emphasis · selected
              </th>
              {emphasisOpts.flatMap(e =>
                selectedOpts.map(s => (
                  <th key={`${e}-${s}`} style={{ padding: '8px 16px', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textAlign: 'center' }}>
                    em={String(e)} sel={String(s)}
                  </th>
                ))
              )}
            </tr>
          </thead>
          <tbody>
            {sizes.map(size => (
              <tr key={size} style={{ borderTop: '1px solid #F0F0F8' }}>
                <td style={{ padding: '16px 16px 16px 0', fontSize: 12, fontWeight: 600, color: '#55557A', verticalAlign: 'middle' }}>
                  {size}
                </td>
                {emphasisOpts.flatMap(e =>
                  selectedOpts.map(s => (
                    <td key={`${e}-${s}`} style={{ padding: '16px', verticalAlign: 'middle', textAlign: 'center' }}>
                      <ProfileHorizontal size={size} emphasis={e} selected={s} name="홍길동" info="3분 전" src={AVATAR} />
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
