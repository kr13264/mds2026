import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'plain' | 'outlined' | 'tonal' | 'solid';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'neutral';

export interface ButtonBasicProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 강조 수준 스타일 (plain · outlined · tonal · solid) */
  variant?: ButtonVariant;
  /** 높이 기준 사이즈 (xs=28 · sm=36 · md=40 · lg=44 · xl=48 · 2xl=52) */
  size?: ButtonSize;
  /** 색상 테마 */
  color?: ButtonColor;
  /** 로딩 상태 */
  loading?: boolean;
  /** 레이블 왼쪽 아이콘 */
  iconHead?: ReactNode;
  /** 레이블 오른쪽 아이콘 */
  iconTail?: ReactNode;
  /** 카운트 배지 */
  count?: number;
  /** 내부 썸네일 이미지 URL */
  thumbnail?: string;
  /** 부모 너비 100% */
  fullWidth?: boolean;
  /** FAB — 화면 위 독립 노출 시 shadow 적용 */
  fab?: boolean;
}
