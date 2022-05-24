import { CSSProperties, ReactNode, RefObject } from 'react';
import { Intent } from '../common/types';

export type CalloutProps = {
  intent?: Intent;
  title?: string;
  icon?: string;
  id?: string;
  className?: string;
  style?: CSSProperties;
  ref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
};
