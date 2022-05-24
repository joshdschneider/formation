import { CSSProperties } from 'react';
import { Intent, Size } from '../common/types';

export type IconProps = {
  icon: string;
  size?: Size;
  intent?: Intent;
  id?: string;
  style?: CSSProperties;
  className?: string;
};
