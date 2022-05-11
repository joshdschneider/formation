import React, { CSSProperties, ReactNode } from 'react';
import { Placement } from '../common/types';

type TooltipProps = {
  selector: string;
  placement?: Placement;
  content?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

abstract class AbstractTooltip extends React.Component<TooltipProps> {
  getClasses(): string {
    let classList = '';

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }
}

export default AbstractTooltip;
