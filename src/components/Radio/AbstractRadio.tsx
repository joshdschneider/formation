import React, { ChangeEventHandler, CSSProperties, ReactNode, RefObject } from 'react';
import { Size } from '../common/types';

type RadioProps = {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  size?: Size;
  className?: string;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
  children?: ReactNode;
};

abstract class AbstractRadio extends React.Component<RadioProps> {
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

export default AbstractRadio;
