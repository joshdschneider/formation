import React, { CSSProperties, ReactNode, RefObject } from 'react';
import { Size } from '../common/types';
import './_button_group.scss';

type ButtonGroupProps = {
  id?: string;
  className?: string;
  style?: CSSProperties;
  size?: Size;
  ref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
};

class ButtonGroup extends React.Component<ButtonGroupProps> {
  getClasses(): string {
    let classList = `button-group`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` button-group--${this.props.size}`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={this.getClasses()}
        ref={this.props.ref}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ButtonGroup;
