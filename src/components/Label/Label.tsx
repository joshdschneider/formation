import React from 'react';
import { LabelProps } from './types';
import './_label.scss';

export class Label extends React.Component<LabelProps> {
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
    const { inline, size, className, children, ...rest } = this.props;

    const targetProps = {
      className: this.getClasses(),
      ...rest,
    };

    return <label {...targetProps}>{children}</label>;
  }
}
