import React, { ChangeEventHandler, CSSProperties, RefObject } from 'react';
import { Size } from '../common/types';

type TextAreaProps = {
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  autofocus?: boolean;
  resizable?: boolean;
  cols?: number;
  rows?: number;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  size?: Size;
  className?: string;
  style?: CSSProperties;
  onChage?: ChangeEventHandler<HTMLTextAreaElement>;
  ref?: RefObject<HTMLTextAreaElement>;
};

abstract class AbstractTextArea extends React.Component<TextAreaProps> {
  getClasses(): string {
    let classList = `textarea`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` textarea-size--${this.props.size}`;
    }

    if (this.props.resizable === false) {
      classList += ` textarea--noresize`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }
}

export default AbstractTextArea;
