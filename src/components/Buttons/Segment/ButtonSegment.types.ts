export type ButtonSegmentShape = 'square' | 'round';
export type ButtonSegmentType = 'half' | 'full';
export type ButtonSegmentSize = 'sm' | 'md' | 'lg';

export interface ButtonSegmentOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface ButtonSegmentProps {
  /** 선택지 목록 (2~4개) */
  options: ButtonSegmentOption[];
  /** 현재 선택 값 */
  value: string;
  /** 선택 변경 핸들러 */
  onChange: (value: string) => void;
  /** 버튼 형태 — square(사각) · round(원형) */
  shape?: ButtonSegmentShape;
  /** 너비 유형 — half(콘텐츠 폭) · full(균등 분할) */
  type?: ButtonSegmentType;
  /** 높이 기준 사이즈 */
  size?: ButtonSegmentSize;
  /** 전체 비활성 */
  disabled?: boolean;
  className?: string;
}
