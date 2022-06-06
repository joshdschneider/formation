import { InputHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { Size } from '../common/types';

export type NativeRadioProps = InputHTMLAttributes<HTMLInputElement>;

export type CustomRadioProps = {
  id?: string;
  radioSize?: Size;
  label?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export type RadioProps = CustomRadioProps & NativeRadioProps;
