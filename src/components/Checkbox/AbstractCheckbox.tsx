import React, { ChangeEventHandler, CSSProperties, ReactNode, RefObject } from 'react';
import { Size } from '../common/types';

type CheckboxProps = {
  id?: string;
  name?: string;
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
