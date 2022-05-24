import { ChangeEventHandler, CSSProperties, ReactNode, RefObject } from 'react';
import { Size } from '../common/types';

export type CheckboxProps = {
  id?: string;
  name?: string;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  size?: Size;
  className?: string;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
  children?: ReactNode;
};
