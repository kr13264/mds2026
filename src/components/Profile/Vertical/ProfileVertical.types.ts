export type ProfileSize = 'default' | 'small';

export interface ProfileProps {
  /** 아바타 사이즈 (default=48px · small=36px) */
  size?: ProfileSize;
  /** 이름 강조 — fontWeight 400 → 600 */
  emphasis?: boolean;
  /** 선택 상태 — 아바타에 파란 테두리(#3283fd) 표시 */
  selected?: boolean;
  /** 아바타 이미지 URL */
  src?: string;
  /** 아바타 이미지 alt */
  alt?: string;
  /** 프로필 이름 */
  name?: string;
  /** 레이블 표시 여부 */
  label?: boolean;
  /** 서브 텍스트 (시간, 채널명 등) */
  info?: string;
  className?: string;
}
