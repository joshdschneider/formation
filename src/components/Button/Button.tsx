import React from 'react';
import { AbstractButton } from './AbstractButton';
import './_button.scss';

export class Button extends AbstractButton {
  render() {
    const {
      loading,
      minimal,
      disabled,
      size,
      intent,
      leftIcon,
      rightIcon,
      className,
      children,
      ...rest
    } = this.props;

    const targetProps = {
      className: this.getClasses(),
      disabled: this.getDisabled(),
      ...rest,
    };

    return <button {...targetProps}>{this.getChildren()}</button>;
  }
}
