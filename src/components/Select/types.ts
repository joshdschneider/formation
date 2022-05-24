import { ChangeEventHandler, CSSProperties, RefObject } from 'react';
import { Intent, Size } from '../common/types';

export type SelectProps = {
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  size?: Size;
  minimal?: boolean;
  intent?: Intent;
  className?: string;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  ref?: RefObject<HTMLSelectElement>;
  options?: Array<OptionGroup | Option>;
};

export type OptionGroup = {
  label: string;
  options: Array<Option>;
};

export type Option = {
  label: string;
  value: string;
};
