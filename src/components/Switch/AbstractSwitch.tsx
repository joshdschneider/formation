import React, { ReactNode } from 'react';
import { SwitchProps } from './types';

export abstract class AbstractSwitch extends React.Component<SwitchProps> {
  getClasses(): string {
    let classList = `switch-container`;
    let size = this.props.switchSize;

    if (!!size && size !== 'regular') {
      classList += ` switch-size--${size}`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }

  getLabel(): string | ReactNode {
    if (!!this.props.label) {
      return this.props.label;
    }

    return this.props.children;
  }
}
