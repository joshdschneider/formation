import React from 'react';
import { TextAreaProps } from './types';

export abstract class AbstractTextArea extends React.Component<TextAreaProps> {
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
