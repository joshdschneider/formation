import { ChangeEventHandler, ReactNode, RefObject } from 'react';
import { Size } from '../common/types';

export type SwitchProps = {
  id?: string;
  name?: string;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  size?: Size;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
  children?: ReactNode;
};
