import React from 'react';
import { TooltipProps } from './types';

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
