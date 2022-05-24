import { ChangeEventHandler, CSSProperties, ReactNode, RefObject } from 'react';
import { Size } from '../common/types';

export type InputProps = {
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  autofocus?: boolean;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: Size;
  className?: string;
  style?: CSSProperties;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
};
