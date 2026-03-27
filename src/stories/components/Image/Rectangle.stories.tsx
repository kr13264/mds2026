import type { Meta, StoryObj } from '@storybook/react';
import { ImageRect } from '@/components/Images';
import type { ImageRectType, ImageRectRatio, ImageRectOpacity, ImageRectShadow, ImageRectFit } from '@/components/Images';

const IMG_SRC = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=800&auto=format&fit=crop';

// ── 레이아웃 헬퍼 ──────────────────────────────────────────────────────────
const Row = ({ children, gap = 8 }: { children: React.ReactNode; gap?: number }) => (
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

const Caption = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: 'Pretendard,sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Meta ───────────────────────────────────────────────────────────────────
const meta: Meta<typeof ImageRect> = {
  title: 'Components/Image/Rectangle',
  component: ImageRect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
비율(ratio), 딤 레이어(opacity), 그림자(shadow), object-fit 조합으로 구성된 Rectangle 이미지 래퍼 컴포넌트.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Description |
|------|-------------|
| \`default\` | 이미지 URL을 받아 표시하는 기본 상태 |
| \`noImage\` | 이미지가 없는 경우 아이콘과 빈 배경 표시 |
| \`placeHolder\` | 이미지 로딩 중 shimmer 애니메이션 표시 |

### Ratio

| Ratio | 설명 |
|-------|------|
| \`1:1\` | 정사각형. 썸네일·앨범 커버 |
| \`16:9\` | 와이드스크린. 동영상·배너 |
| \`3:2\` | 일반 사진 비율 |
| \`3:4\` | 세로형 콘텐츠 |
| \`3:4.5\` | 세로형 콘텐츠 (더 긴 비율) |
| \`3:5\` | 세로형 콘텐츠 (가장 긴 비율) |
| \`noFix\` | 비율 고정 없음. 부모 크기에 맞춤 |

### Opacity

| Opacity | 설명 |
|---------|------|
| \`none\` | 딤 레이어 없음 |
| \`3%\` | 미세한 딤. 텍스트 가독성 보조 |
| \`40%\` | 중간 딤. 이미지 위 텍스트 레이블 조합 |

### Shadow

| Shadow | 설명 |
|--------|------|
| \`none\` | 그라디언트 오버레이 없음 |
| \`up\` | 상단 방향 그라디언트 |
| \`down\` | 하단 방향 그라디언트 |
| \`up&down\` | 상하단 동시 그라디언트 |

### Contents

| Slot | Type | Default | Description |
|------|------|---------|-------------|
| \`label\` | string | — | 하단 오버레이 텍스트 레이블 |
| \`icon\` | boolean | \`false\` | 우상단 아이콘 뱃지 표시 |
| \`fit\` | \`cover\` · \`contain\` · \`fill\` · \`scale-down\` | \`cover\` | 이미지 object-fit |
| \`disabled\` | boolean | \`false\` | 비활성 상태 (opacity 0.35) |

\`\`\`tsx
import { ImageRect } from '@/components/Images';

<ImageRect src={imgSrc} ratio="16:9" opacity="40%" shadow="down" label="제목" />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'noImage', 'placeHolder'] satisfies ImageRectType[],
      description: '이미지 표시 타입',
      table: {
        type: { summary: 'ImageRectType' },
        defaultValue: { summary: 'default' },
      },
    },
    ratio: {
      control: 'select',
      options: ['1:1', '16:9', '3:2', '3:4', '3:4.5', '3:5', 'noFix'] satisfies ImageRectRatio[],
      description: '이미지 비율',
      table: {
        type: { summary: 'ImageRectRatio' },
        defaultValue: { summary: '1:1' },
      },
    },
    opacity: {
      control: 'select',
      options: ['none', '3%', '40%'] satisfies ImageRectOpacity[],
      description: '딤 레이어 불투명도',
      table: {
        type: { summary: 'ImageRectOpacity' },
        defaultValue: { summary: 'none' },
      },
    },
    shadow: {
      control: 'select',
      options: ['none', 'up', 'down', 'up&down'] satisfies ImageRectShadow[],
      description: '그라디언트 그림자 방향',
      table: {
        type: { summary: 'ImageRectShadow' },
        defaultValue: { summary: 'none' },
      },
    },
    fit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'scale-down'] satisfies ImageRectFit[],
      description: '이미지 object-fit',
      table: {
        type: { summary: 'ImageRectFit' },
        defaultValue: { summary: 'cover' },
      },
    },
    label: {
      control: 'text',
      description: '하단 오버레이 텍스트 레이블',
      table: { type: { summary: 'string' } },
    },
    icon: {
      control: 'boolean',
      description: '우상단 아이콘 뱃지 표시',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: '비활성 상태 (opacity 0.35, pointer-events none)',
      table: { defaultValue: { summary: 'false' } },
    },
    src: {
      control: 'text',
      description: '이미지 URL',
      table: { type: { summary: 'string' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageRect>;

// ── Playground ─────────────────────────────────────────────────────────────
export const Playground: Story = {
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
  args: {
    src: IMG_SRC,
    ratio: '16:9',
    type: 'default',
    opacity: 'none',
    shadow: 'none',
    fit: 'cover',
  },
};

// ── Type ───────────────────────────────────────────────────────────────────
export const Types: Story = {
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Types" desc="이미지 표시 상태에 따른 3가지 타입">
        <Row gap={12}>
          {([
            { type: 'default' as ImageRectType, src: IMG_SRC, label: 'default' },
            { type: 'noImage' as ImageRectType, src: undefined, label: 'noImage' },
            { type: 'placeHolder' as ImageRectType, src: undefined, label: 'placeHolder' },
          ]).map(({ type, src, label }) => (
            <div key={type} style={{ width: 180 }}>
              <ImageRect type={type} src={src} ratio="16:9" />
              <Caption>{label}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Ratio ──────────────────────────────────────────────────────────────────
export const Ratios: Story = {
  name: 'Ratio',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Measurement" desc="비율 기준으로 정의. 콘텐츠 유형에 따라 선택합니다.">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E4E4EE' }}>
                {['Ratio', '1:1', '16:9', '3:2', '3:4', '3:4.5', '3:5', 'noFix'].map(h => (
                  <th key={h} style={{ padding: '8px 16px', textAlign: 'center', fontWeight: 700, color: '#55557A' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #F0F0F8' }}>
                <td style={{ padding: '8px 16px', fontWeight: 600, color: '#55557A' }}>Usage</td>
                {[
                  '정사각형\n썸네일',
                  '와이드\n동영상·배너',
                  '일반\n사진',
                  '세로형\n콘텐츠',
                  '세로형\n(긴 비율)',
                  '세로형\n(더 긴)',
                  '고정 없음\n부모에 맞춤',
                ].map((desc, i) => (
                  <td key={i} style={{ padding: '8px 16px', textAlign: 'center', color: '#111122' }}>
                    {desc.split('\n').map((line, j) => <span key={j} style={{ display: 'block' }}>{line}</span>)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Block>

      <Block label="Usage" desc="각 비율 별 이미지 시각화">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-start' }}>
          {(['1:1', '16:9', '3:2', '3:4', '3:4.5', '3:5'] as ImageRectRatio[]).map(ratio => (
            <div key={ratio} style={{ width: 140 }}>
              <ImageRect src={IMG_SRC} ratio={ratio} />
              <Caption>{ratio}</Caption>
            </div>
          ))}
          <div style={{ width: 140, height: 100 }}>
            <ImageRect src={IMG_SRC} ratio="noFix" style={{ width: '100%', height: '100%' }} />
            <Caption>noFix</Caption>
          </div>
        </div>
      </Block>
    </div>
  ),
};

// ── Opacity ────────────────────────────────────────────────────────────────
export const Opacities: Story = {
  name: 'Opacity',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Opacity" desc="딤 레이어의 불투명도 수준">
        <Row gap={12}>
          {(['none', '3%', '40%'] as ImageRectOpacity[]).map(opacity => (
            <div key={opacity} style={{ width: 200 }}>
              <ImageRect src={IMG_SRC} ratio="16:9" opacity={opacity} />
              <Caption>{opacity}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Shadow ─────────────────────────────────────────────────────────────────
export const Shadows: Story = {
  name: 'Shadow',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="Shadow" desc="방향성 그라디언트 오버레이">
        <Row gap={12}>
          {(['none', 'up', 'down', 'up&down'] as ImageRectShadow[]).map(shadow => (
            <div key={shadow} style={{ width: 200 }}>
              <ImageRect src={IMG_SRC} ratio="16:9" shadow={shadow} />
              <Caption>{shadow}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Contents Slots ─────────────────────────────────────────────────────────
export const ContentsSlots: Story = {
  name: 'Contents',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="label" desc="하단 오버레이 텍스트 레이블">
        <div style={{ width: 240 }}>
          <ImageRect src={IMG_SRC} ratio="16:9" opacity="40%" shadow="down" label="이미지 레이블 텍스트" />
        </div>
      </Block>

      <Block label="icon" desc="우상단 아이콘 뱃지">
        <div style={{ width: 240 }}>
          <ImageRect src={IMG_SRC} ratio="16:9" icon />
        </div>
      </Block>

      <Block label="fit" desc="object-fit 옵션 — 이미지 맞춤 방식">
        <Row gap={12}>
          {(['cover', 'contain', 'fill', 'scale-down'] as ImageRectFit[]).map(fit => (
            <div key={fit} style={{ width: 180 }}>
              <ImageRect src={IMG_SRC} ratio="16:9" fit={fit} />
              <Caption>{fit}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── State ──────────────────────────────────────────────────────────────────
export const States: Story = {
  name: 'State',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Block label="enabled" desc="기본 상태. 사용자가 인터랙션 가능한 경우">
        <div style={{ width: 240 }}>
          <ImageRect src={IMG_SRC} ratio="16:9" />
        </div>
      </Block>
      <Block label="disabled" desc="비활성 상태. opacity 0.35, pointer-events none">
        <div style={{ width: 240 }}>
          <ImageRect src={IMG_SRC} ratio="16:9" disabled />
        </div>
      </Block>
    </div>
  ),
};

// ── Matrix ─────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const ratios: ImageRectRatio[] = ['1:1', '16:9', '3:2', '3:4', '3:4.5', '3:5'];
    const types: ImageRectType[] = ['default', 'noImage', 'placeHolder'];
    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                Ratio \ Type
              </th>
              {types.map(t => (
                <th key={t} style={{ padding: '8px 16px', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ratios.map(ratio => (
              <tr key={ratio} style={{ borderTop: '1px solid #F0F0F8' }}>
                <td style={{ padding: '12px 16px 12px 0', fontSize: 12, fontWeight: 600, color: '#55557A', verticalAlign: 'middle' }}>
                  {ratio}
                </td>
                {types.map(type => (
                  <td key={type} style={{ padding: '12px 8px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <div style={{ width: 140 }}>
                      <ImageRect
                        type={type}
                        src={type === 'default' ? IMG_SRC : undefined}
                        ratio={ratio}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
