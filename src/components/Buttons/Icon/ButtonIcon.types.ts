import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonIconVariant = 'plain' | 'outlined' | 'tonal' | 'solid';
export type ButtonIconSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonIconColor = 'primary' | 'secondary' | 'danger' | 'neutral';
export type ButtonIconShape = 'square' | 'round';

export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 아이콘 요소 (필수) */
  icon: ReactNode;
  /** 강조 수준 스타일 */
  variant?: ButtonIconVariant;
  /** 높이 기준 사이즈 (sm=36 · md=40 · lg=44 · xl=48 · 2xl=52) */
  size?: ButtonIconSize;
  /** 색상 테마 */
  color?: ButtonIconColor;
  /** 버튼 형태 — square(사각) · round(원형) */
  shape?: ButtonIconShape;
  /** 로딩 상태 */
  loading?: boolean;
  /** FAB — 화면 위 독립 노출 시 shadow 적용 */
  fab?: boolean;
}
