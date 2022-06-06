import { InputHTMLAttributes } from 'react';
import { Intent, Size } from '../common/types';

export type NativeFileUploadProps = InputHTMLAttributes<HTMLInputElement>;

export type CustomFileUploadProps = {
  value?: FileList;
  width?: string;
  disabled?: string;
  fileUploadSize?: Size;
  intent?: Intent;
  className?: string;
};

export type FileUploadProps = CustomFileUploadProps & NativeFileUploadProps;
