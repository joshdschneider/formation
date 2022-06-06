import { InputHTMLAttributes, ReactNode } from 'react';
import { Size } from '../common/types';

export type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

export type CustomInputProps = {
  inputSize?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
};

export type InputProps = CustomInputProps & NativeInputProps;
