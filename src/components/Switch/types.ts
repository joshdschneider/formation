import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import { Size } from '../common/types';

export type NativeSwitchProps = InputHTMLAttributes<HTMLInputElement>;

export type CustomSwitchProps = {
  switchSize?: Size;
  label?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export type SwitchProps = CustomSwitchProps & NativeSwitchProps;
