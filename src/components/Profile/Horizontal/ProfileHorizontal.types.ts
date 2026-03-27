export type ProfileSize = 'default' | 'small';

export interface ProfileHorizontalProps {
  /** 아바타 사이즈 (default=36px · small=28px) */
  size?: ProfileSize;
  /** 이름 강조 — fontWeight 400 → 600 */
  emphasis?: boolean;
  /** 선택 상태 — 아바타에 파란 테두리(#3283fd) 표시 */
  selected?: boolean;
  /** 아바타 이미지 URL */
  src?: string;
  /** 아바타 alt 텍스트 */
  alt?: string;
  /** 프로필/채널 이름 */
  name?: string;
  /** 이름 옆 서브 레이블 (점 구분자로 연결) */
  sub?: string;
  /** 하단 서브 텍스트 (시간, 채널 정보 등) */
  info?: string;
  className?: string;
}
