export type ButtonGroupShape = 'square' | 'round';
export type ButtonGroupSize = 'sm' | 'md' | 'lg';

export interface ButtonGroupProps {
  /** 취소 버튼 레이블 */
  cancelLabel?: string;
  /** 확인 버튼 레이블 */
  confirmLabel?: string;
  /** 취소 버튼 클릭 핸들러 */
  onCancel?: () => void;
  /** 확인 버튼 클릭 핸들러 */
  onConfirm?: () => void;
  /** 버튼 형태 — square(사각) · round(원형) */
  shape?: ButtonGroupShape;
  /** 높이 기준 사이즈 */
  size?: ButtonGroupSize;
  /** 전체 너비 */
  fullWidth?: boolean;
  /** 전체 비활성 */
  disabled?: boolean;
  className?: string;
}
