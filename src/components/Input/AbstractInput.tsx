import React, { ChangeEventHandler, CSSProperties, ReactNode, RefObject } from 'react';
import { Size } from '../common/types';

type InputProps = {
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  autofocus?: boolean;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: Size;
  className?: string;
  style?: CSSProperties;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onChage?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
};

abstract class AbstractInput extends React.Component<InputProps> {
  getClasses(): string {
    let classList = `input`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` input-size--${this.props.size}`;
    }

    if (!!this.props.leftIcon) {
      classList += ` input--left-icon`;
    }

    if (this.props.rightIcon) {
      classList += ` input--right-icon`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }

  getIcons(): ReactNode {
    return (
      <>
        {this.props.leftIcon ? (
          <span className={`input-icon input-icon--left`}>{this.props.leftIcon}</span>
        ) : null}
        {this.props.rightIcon ? (
          <span className={`input-icon input-icon--right`}>{this.props.rightIcon}</span>
        ) : null}
      </>
    );
  }
}

export default AbstractInput;
