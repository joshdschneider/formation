import { CSSProperties, MouseEventHandler, ReactNode, RefObject } from 'react';
import { Size, Intent } from '../common/types';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  loading?: boolean;
  minimal?: boolean;
  size?: Size;
  intent?: Intent;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ref?: RefObject<HTMLButtonElement>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
};
