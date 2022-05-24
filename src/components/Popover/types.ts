import { CSSProperties, ReactNode } from 'react';
import { Placement } from '../common/types';

export type PopoverProps = {
  type?: 'popover' | 'tooltip';
  action?: 'click' | 'hover';
  selector: string;
  placement?: Placement;
  content?: ReactNode;
  className?: string;
  style?: CSSProperties;
};
