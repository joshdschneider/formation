import React, { ReactNode } from 'react';
import { SwitchProps } from './types';

abstract class AbstractSwitch extends React.Component<SwitchProps> {
  getClasses(): string {
    let classList = `switch-container`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` switch-size--${this.props.size}`;
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

export default AbstractSwitch;
