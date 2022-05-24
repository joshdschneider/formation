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

export type IconData = {
  displayName?: string;
  iconName?: string;
  tags?: string;
  group?: string;
  codepoint?: number;
  paths?: string[];
};
