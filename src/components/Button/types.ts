import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Size, Intent } from '../common/types';

export type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type CustomButtonProps = {
  loading?: boolean;
  minimal?: boolean;
  disabled?: boolean;
  size?: Size;
  intent?: Intent;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export type ButtonProps = CustomButtonProps & NativeButtonProps;
