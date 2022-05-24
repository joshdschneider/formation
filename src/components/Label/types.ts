import { ReactNode } from 'react';
import { Size } from '../common/types';

export type LabelProps = {
  id?: string;
  for?: string;
  inline?: boolean;
  className?: string;
  size?: Size;
  children?: ReactNode;
};
