import React, { ReactNode } from 'react';
import { RadioProps } from './types';

export abstract class AbstractRadio extends React.Component<RadioProps> {
  getClasses(): string {
    let classList = `radio-container`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` radio-size--${this.props.size}`;
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
