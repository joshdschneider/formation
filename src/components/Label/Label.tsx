import React, { ReactNode } from 'react';
import { Size } from '../common/types';
import './_label.scss';

type LabelProps = {
  id?: string;
  for?: string;
  inline?: boolean;
  className?: string;
  size?: Size;
  children?: ReactNode;
};

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
