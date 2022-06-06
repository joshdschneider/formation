import { HTMLAttributes, ReactNode } from 'react';
import { Size } from '../common/types';

export type NativeButtonGroupProps = HTMLAttributes<HTMLDivElement>;

export type CustomButtonGroupProps = {
  size?: Size;
  className?: string;
  children?: ReactNode;
};

export type ButtonGroupProps = CustomButtonGroupProps & NativeButtonGroupProps;
