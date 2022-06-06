import { SelectHTMLAttributes } from 'react';
import { Intent, Size } from '../common/types';

export type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export type CustomSelectProps = {
  selectSize?: Size;
  minimal?: boolean;
  intent?: Intent;
  className?: string;
  options?: Array<OptionGroup | Option>;
};

export type SelectProps = CustomSelectProps & NativeSelectProps;

export type OptionGroup = {
  label: string;
  options: Array<Option>;
};

export type Option = {
  label: string;
  value: string;
};
