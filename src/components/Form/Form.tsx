import React from 'react';
import { FormProps } from './types';
import './_form.scss';

export class Form extends React.Component<FormProps> {
  getClasses(): string {
    let classList = `form`;
    if (!!this.props.className) classList += ` ${this.props.className}`;
    return classList;
  }

  render() {
    const { className, children, ...rest } = this.props;

    const targetProps = {
      className: this.getClasses(),
      ...rest,
    };

    return <form {...targetProps}>{children}</form>;
  }
}
