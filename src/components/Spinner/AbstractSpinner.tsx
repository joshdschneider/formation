import React from 'react';
import { SpinnerProps } from './types';

export abstract class AbstractSpinner extends React.Component<SpinnerProps> {
  getSize(): number {
    switch (this.props.size) {
      case 'small':
        return 14;
      case 'regular':
        return 14;
      case 'large':
        return 16;
      default:
        return 14;
    }
  }

  getBorderWidth(): number {
    switch (this.props.size) {
      case 'small':
        return 3;
      case 'regular':
        return 3;
      case 'large':
        return 4;
      default:
        return 3;
    }
  }

  getStyles(): object {
    return {
      width: this.getSize(),
      height: this.getSize(),
      borderWidth: this.getBorderWidth(),
      ...this.props.style,
    };
  }

  getClasses(): string {
    let classList = `spinner`;

    if (!!this.props.intent) {
      classList += ` spinner--${this.props.intent}`;
    } else {
      classList += ` spinner--default`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }
}
