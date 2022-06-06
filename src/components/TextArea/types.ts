import { TextareaHTMLAttributes } from 'react';
import { Size } from '../common/types';

export type NativeTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type CustomTextAreaProps = {
  resizable?: boolean;
  textAreaSize?: Size;
  className?: string;
};

export type TextAreaProps = CustomTextAreaProps & NativeTextAreaProps;
