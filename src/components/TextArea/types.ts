import { ChangeEventHandler, CSSProperties, RefObject } from 'react';
import { Size } from '../common/types';

export type TextAreaProps = {
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  autofocus?: boolean;
  resizable?: boolean;
  cols?: number;
  rows?: number;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: Size;
  className?: string;
  style?: CSSProperties;
  onChage?: ChangeEventHandler<HTMLTextAreaElement>;
  ref?: RefObject<HTMLTextAreaElement>;
};
