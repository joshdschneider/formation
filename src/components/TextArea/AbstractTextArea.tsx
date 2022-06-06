import React from 'react';
import { TextAreaProps } from './types';

export abstract class AbstractTextArea extends React.Component<TextAreaProps> {
  getClasses(): string {
    let classList = `textarea`;
    let size = this.props.textAreaSize;

    if (!!size && size !== 'regular') {
      classList += ` textarea-size--${size}`;
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
