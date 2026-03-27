import type { Meta, StoryObj } from '@storybook/react';
import { Thumbnail } from '@/components/Thumbnail';
import type { ThumbnailType, ThumbnailRadius, ThumbnailRatio } from '@/components/Thumbnail';

// ── 레이아웃 헬퍼 ───────────────────────────────────────────────────────────
const Row = ({ children, gap = 16 }: { children: React.ReactNode; gap?: number }) => (
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
  <p style={{ fontFamily: 'Pretendard, sans-serif', fontSize: 11, color: '#9999B8', margin: '6px 0 0', textAlign: 'center' }}>{children}</p>
);

// ── Sample image ─────────────────────────────────────────────────────────────
const IMG = 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=400&auto=format&fit=crop';

// ── Meta ─────────────────────────────────────────────────────────────────────
const meta: Meta<typeof Thumbnail> = {
  title: 'Components/Thumbnail',
  component: Thumbnail,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
콘텐츠 목록에서 사용하는 **정사각형 썸네일** 컴포넌트입니다.
이미지 타입, 모서리 반경, 뱃지·랭킹·재생시간 오버레이를 조합할 수 있습니다.

---

<div style="margin-bottom:30px"></div>

### Type

| Type | Dim | Shadow | 재생시간 | Description |
|------|-----|--------|---------|-------------|
| \`image\` | 3% | none | — | 기본 이미지 썸네일 |
| \`media\` | 8% | down | ✓ | 동영상 콘텐츠 썸네일 |
| \`gallery\` | 8% | up&down | ✓ | 갤러리(다중) 콘텐츠 썸네일 |

### Ratio

| Ratio | 비율 | Usage |
|-------|------|-------|
| \`1:1\`  | 정사각형 | 프로필·앨범 썸네일 |
| \`16:9\` | 가로형 | 동영상·뉴스 썸네일 |
| \`4:3\`  | 표준 가로 | 일반 이미지 카드 |
| \`4:5\`  | 세로형 | 세로 이미지·숏폼 |
| \`9:16\` | 세로 풀 | 쇼츠·릴스 썸네일 |

### Radius

| Radius | Value | Usage |
|--------|-------|-------|
| \`none\` | 0px | 기본, 테두리 없음 |
| \`8\` | 8px | 소형 카드 |
| \`12\` | 12px | 중형 카드 |
| \`16\` | 16px | 대형 카드 |

### Overlays

| Slot | Type | Description |
|------|------|-------------|
| \`badge\` | string | 좌상단 코너 뱃지 (예: "LIVE", "NEW") |
| \`rank\` | number | 좌하단 랭킹 번호 |
| \`showMore\` | boolean | 우상단 더보기 아이콘 |
| \`duration\` | string | 우하단 재생시간 (media·gallery) |

\`\`\`tsx
import { Thumbnail } from '@/components/Thumbnail';

<Thumbnail src={img} type="image" radius={12} />
<Thumbnail src={img} type="media" radius={8} duration="03:25" badge="LIVE" showMore />
<Thumbnail src={img} type="gallery" radius={12} duration="12:00" rank={1} />
\`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['image', 'media', 'gallery'] satisfies ThumbnailType[],
      description: '썸네일 타입',
      table: { type: { summary: 'ThumbnailType' }, defaultValue: { summary: 'image' } },
    },
    ratio: {
      control: 'select',
      options: ['1:1', '16:9', '4:3', '4:5', '9:16'] satisfies ThumbnailRatio[],
      description: '이미지 비율 — 설정 시 width 기준으로 height 자동 계산',
      table: { type: { summary: 'ThumbnailRatio' } },
    },
    radius: {
      control: 'select',
      options: ['none', 8, 12, 16] satisfies ThumbnailRadius[],
      description: '모서리 반경',
      table: { type: { summary: 'ThumbnailRadius' }, defaultValue: { summary: 'none' } },
    },
    src:      { control: 'text',    description: '이미지 URL' },
    width:    { control: 'number',  description: '너비 (px)', table: { defaultValue: { summary: '150' } } },
    height:   { control: 'number',  description: '높이 (px)', table: { defaultValue: { summary: '150' } } },
    duration: { control: 'text',    description: '재생시간 (media·gallery)' },
    badge:    { control: 'text',    description: '좌상단 코너 뱃지 텍스트' },
    rank:     { control: 'number',  description: '좌하단 랭킹 번호' },
    showMore: { control: 'boolean', description: '우상단 더보기 아이콘', table: { defaultValue: { summary: 'false' } } },
  },
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

// ── Playground ────────────────────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    type: 'media',
    radius: 12,
    src: IMG,
    width: 150,
    height: 150,
    duration: '03:25',
    badge: 'LIVE',
    showMore: true,
  },
};

// ── Type ──────────────────────────────────────────────────────────────────────
export const Types: Story = {
  name: 'Type',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="Measurement" desc="타입에 따라 딤·쉐도우·재생시간 오버레이가 다르게 적용됩니다.">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontFamily: 'Pretendard, sans-serif', fontSize: 12, whiteSpace: 'nowrap' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E4E4EE' }}>
                {['Type', 'Dim', 'Shadow', '재생시간'].map(h => (
                  <th key={h} style={{ padding: '8px 24px', textAlign: 'center', fontWeight: 700, color: '#55557A' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['image',   '3%',  'none',     '—'],
                ['media',   '8%',  'down',     '✓'],
                ['gallery', '8%',  'up & down','✓'],
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
        <Row gap={16}>
          {(['image', 'media', 'gallery'] as ThumbnailType[]).map(t => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type={t} radius={8} width={150} height={150} duration="03:25" />
              <Caption>type="{t}"</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Ratio ─────────────────────────────────────────────────────────────────────
export const Ratios: Story = {
  name: 'Ratio',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="Usage" desc="width 기준으로 height가 자동 계산됩니다.">
        <Row gap={16}>
          {(['1:1', '16:9', '4:3', '4:5', '9:16'] as ThumbnailRatio[]).map(r => (
            <div key={r} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type="image" radius={8} width={120} ratio={r} />
              <Caption>{r}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Radius ────────────────────────────────────────────────────────────────────
export const Radiuses: Story = {
  name: 'Radius',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="Usage" desc="모서리 반경 옵션입니다.">
        <Row gap={16}>
          {(['none', 8, 12, 16] as ThumbnailRadius[]).map(r => (
            <div key={String(r)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type="image" radius={r} width={150} height={150} />
              <Caption>radius={r}</Caption>
            </div>
          ))}
        </Row>
      </Block>
    </div>
  ),
};

// ── Overlays ──────────────────────────────────────────────────────────────────
export const Overlays: Story = {
  name: 'Overlays',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 4 }}>
      <Block label="badge" desc="좌상단 코너 뱃지. LIVE, NEW 등 상태 표시에 사용합니다.">
        <Row gap={16}>
          {['LIVE', 'NEW'].map(b => (
            <div key={b} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type="image" radius={8} width={150} height={150} badge={b} />
              <Caption>badge="{b}"</Caption>
            </div>
          ))}
        </Row>
      </Block>

      <Block label="rank" desc="좌하단 랭킹 번호를 표시합니다.">
        <Row gap={16}>
          {[1, 2, 3].map(n => (
            <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type="image" radius={8} width={150} height={150} rank={n} />
              <Caption>rank={n}</Caption>
            </div>
          ))}
        </Row>
      </Block>

      <Block label="showMore" desc="우상단 더보기(⋮) 아이콘을 표시합니다.">
        <Row gap={16}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Thumbnail src={IMG} type="image" radius={8} width={150} height={150} showMore />
            <Caption>showMore</Caption>
          </div>
        </Row>
      </Block>

      <Block label="duration" desc="우하단 재생시간. media·gallery 타입에서 사용합니다.">
        <Row gap={16}>
          {(['media', 'gallery'] as ThumbnailType[]).map(t => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail src={IMG} type={t} radius={8} width={150} height={150} duration="03:25" />
              <Caption>type="{t}"</Caption>
            </div>
          ))}
        </Row>
      </Block>

      <Block label="조합 예시" desc="badge · showMore · rank · duration을 함께 사용합니다.">
        <Row gap={16}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Thumbnail src={IMG} type="media" radius={12} width={150} height={150}
              badge="LIVE" showMore duration="03:25" />
            <Caption>media + badge + more + duration</Caption>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Thumbnail src={IMG} type="gallery" radius={12} width={150} height={150}
              rank={1} showMore duration="12:00" />
            <Caption>gallery + rank + more + duration</Caption>
          </div>
        </Row>
      </Block>
    </div>
  ),
};

// ── Matrix ────────────────────────────────────────────────────────────────────
export const Matrix: Story = {
  name: 'Matrix',
  render: () => {
    const types: ThumbnailType[] = ['image', 'media', 'gallery'];
    const radiuses: ThumbnailRadius[] = ['none', 8, 12, 16];

    return (
      <div style={{ fontFamily: 'Pretendard, sans-serif', overflowX: 'auto', padding: 4 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px 16px 8px 0', textAlign: 'left', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                type \ radius
              </th>
              {radiuses.map(r => (
                <th key={String(r)} style={{ padding: '8px 16px', fontSize: 11, color: '#9999B8', fontWeight: 700, letterSpacing: '0.07em', textAlign: 'center' }}>
                  {r}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {types.map(t => (
              <tr key={t} style={{ borderTop: '1px solid #F0F0F8' }}>
                <td style={{ padding: '16px 16px 16px 0', fontSize: 12, fontWeight: 600, color: '#55557A', verticalAlign: 'middle' }}>
                  {t}
                </td>
                {radiuses.map(r => (
                  <td key={String(r)} style={{ padding: '12px 16px', verticalAlign: 'middle', textAlign: 'center' }}>
                    <Thumbnail
                      src={IMG} type={t} radius={r}
                      width={100} height={100}
                      duration={t !== 'image' ? '03:25' : undefined}
                    />
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
