import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { Size } from '../common/types';

export type NativeCheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export type CustomCheckboxProps = {
  checkboxSize?: Size;
  label?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export type CheckboxProps = CustomCheckboxProps & NativeCheckboxProps;
