import React from 'react';
import { LabelProps } from './types';
import './_label.scss';

class Label extends React.Component<LabelProps> {
  getClasses(): string {
    let classList = `label`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` label--${this.props.size}`;
    }

    if (!!this.props.inline) {
      classList += ` label--inline`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }

  render() {
    return (
      <label id={this.props.id} htmlFor={this.props.for} className={this.getClasses()}>
        {this.props.children}
      </label>
    );
  }
}

export default Label;
