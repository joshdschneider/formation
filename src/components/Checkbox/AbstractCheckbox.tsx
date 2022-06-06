import React, { ReactNode } from 'react';
import { CheckboxProps } from './types';

export abstract class AbstractCheckbox extends React.Component<CheckboxProps> {
  getClasses(): string {
    let classList = `checkbox-container`;
    let size = this.props.checkboxSize;

    if (!!size && size !== 'regular') {
      classList += ` checkbox-size--${size}`;
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
