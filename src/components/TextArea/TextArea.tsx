import React from 'react';
import { AbstractTextArea } from './AbstractTextArea';
import './_textarea.scss';

export class TextArea extends AbstractTextArea {
  render() {
    const { resizable, textAreaSize, className, ...rest } = this.props;

    const targetProps = {
      className: this.getClasses(),
      ...rest,
    };

    return <textarea {...targetProps} />;
  }
}
