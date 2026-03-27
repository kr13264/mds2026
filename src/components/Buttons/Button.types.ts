import type { ButtonHTMLAttributes, ReactNode } from 'react';

/** 강조 수준에 따른 스타일 — 위키 Style 섹션 기준 */
export type ButtonVariant = 'plain' | 'outlined' | 'tonal' | 'solid';

/** 높이(height) 기준 6단계 사이즈 */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/** 버튼 사용 목적에 따른 타입 */
export type ButtonType = 'basic' | 'icon' | 'segment' | 'group';

/** 버튼 색상 테마 */
export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'neutral';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 강조 수준 스타일 (plain · outlined · tonal · solid) */
  variant?: ButtonVariant;
  /** 높이 기준 사이즈 (xs=28 · sm=36 · md=40 · lg=44 · xl=48 · 2xl=52) */
  size?: ButtonSize;
  /** 색상 테마 */
  color?: ButtonColor;
  /** 로딩 상태 */
  loading?: boolean;
  /** 레이블 왼쪽 아이콘 (iconHead) */
  iconHead?: ReactNode;
  /** 레이블 오른쪽 아이콘 (iconTail) */
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
