import { CSSProperties, ReactNode, RefObject } from 'react';

export type CardProps = {
  interactive?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  ref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
};
