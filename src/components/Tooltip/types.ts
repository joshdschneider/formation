import { CSSProperties, ReactNode } from 'react';
import { Placement } from '../common/types';

export type TooltipProps = {
  selector: string;
  placement?: Placement;
  content?: ReactNode;
  className?: string;
  style?: CSSProperties;
};
