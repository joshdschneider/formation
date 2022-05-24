import { CSSProperties, ReactNode, RefObject } from 'react';
import { Size } from '../common/types';

export type ButtonGroupProps = {
  id?: string;
  className?: string;
  style?: CSSProperties;
  size?: Size;
  ref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
};
