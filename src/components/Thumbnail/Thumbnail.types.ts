export type ThumbnailType = 'image' | 'media' | 'gallery';
export type ThumbnailRadius = 'none' | 8 | 12 | 16;
export type ThumbnailRatio = '1:1' | '16:9' | '4:3' | '4:5' | '9:16';

export interface ThumbnailProps {
  /** 썸네일 타입 */
  type?: ThumbnailType;
  /** 모서리 반경 */
  radius?: ThumbnailRadius;
  /** 이미지 비율 — 설정 시 width 기준으로 height 자동 계산 */
  ratio?: ThumbnailRatio;
  /** 이미지 URL */
  src?: string;
  /** 이미지 alt 텍스트 */
  alt?: string;
  /** 너비 (px) */
  width?: number;
  /** 높이 (px) — ratio 미설정 시 사용 */
  height?: number;
  /** 재생시간 텍스트 (media·gallery 타입) — 예: "03:25" */
  duration?: string;
  /** 좌상단 코너 뱃지 텍스트 — 예: "LIVE", "NEW" */
  badge?: string;
  /** 좌하단 랭킹 번호 */
  rank?: number;
  /** 우상단 더보기 버튼 표시 여부 */
  showMore?: boolean;
  className?: string;
}
