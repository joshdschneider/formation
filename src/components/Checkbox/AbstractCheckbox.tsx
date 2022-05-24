import React, { ReactNode } from 'react';
import { CheckboxProps } from './types';

abstract class AbstractCheckbox extends React.Component<CheckboxProps> {
  getClasses(): string {
    let classList = `checkbox-container`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` checkbox-size--${this.props.size}`;
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

export default AbstractCheckbox;
