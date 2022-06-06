import { LabelHTMLAttributes, ReactNode } from 'react';
import { Size } from '../common/types';

export type NativeLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export type CustomLabelProps = {
  inline?: boolean;
  size?: Size;
  className?: string;
  children?: ReactNode;
};

export type LabelProps = CustomLabelProps & NativeLabelProps;
