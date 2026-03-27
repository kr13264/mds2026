import type { ImgHTMLAttributes } from 'react';

/** 이미지 표시 타입 */
export type ImageRectType = 'default' | 'noImage' | 'placeHolder';

/** 이미지 비율 */
export type ImageRectRatio = '1:1' | '16:9' | '3:2' | '3:4' | '3:4.5' | '3:5' | 'noFix';

/** 딤 레이어 불투명도 */
export type ImageRectOpacity = 'none' | '3%' | '40%';

/** 그림자(그라디언트 오버레이) 방향 */
export type ImageRectShadow = 'none' | 'up' | 'down' | 'up&down';

/** 이미지 object-fit */
export type ImageRectFit = 'cover' | 'contain' | 'fill' | 'scale-down';

export interface ImageRectProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** 이미지 URL */
  src?: string;
  /** 이미지 표시 타입 (default · noImage · placeHolder) */
  type?: ImageRectType;
  /** 비율 기준 (1:1 · 16:9 · 3:2 · 3:4 · 3:4.5 · 3:5 · noFix) */
  ratio?: ImageRectRatio;
  /** 딤 레이어 불투명도 (none · 3% · 40%) */
  opacity?: ImageRectOpacity;
  /** 그림자 그라디언트 방향 (none · up · down · up&down) */
  shadow?: ImageRectShadow;
  /** 하단 오버레이 텍스트 레이블 */
  label?: string;
  /** 우상단 아이콘 뱃지 표시 여부 */
  icon?: boolean;
  /** 비활성화 상태 (opacity 0.35, pointer-events none) */
  disabled?: boolean;
  /** border-radius 크기 */
  radius?: 'md' | 'lg' | 'none';
  /** 이미지 object-fit (cover · contain · fill · scale-down) */
  fit?: ImageRectFit;
}
