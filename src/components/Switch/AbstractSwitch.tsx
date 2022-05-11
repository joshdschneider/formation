import React, { ChangeEventHandler, ReactNode, RefObject } from 'react';
import { Size } from '../common/types';

type SwitchProps = {
  id?: string;
  name?: string;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  size?: Size;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
  children?: ReactNode;
};

abstract class AbstractSwitch extends React.Component<SwitchProps> {
  getClasses(): string {
    let classList = `switch-container`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` switch-size--${this.props.size}`;
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

export default AbstractSwitch;
