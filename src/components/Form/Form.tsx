import React from 'react';
import { FormProps } from './types';
import './_form.scss';

class Form extends React.Component<FormProps> {
  getClasses(): string {
    let classList = `form`;
    if (!!this.props.className) classList += ` ${this.props.className}`;
    return classList;
  }

  render() {
    return (
      <form
        id={this.props.id}
        className={this.getClasses()}
        style={this.props.style}
        acceptCharset={this.props.acceptCharset}
        action={this.props.action}
        autoComplete={this.props.autoComplete}
        encType={this.props.encType}
        method={this.props.method}
        name={this.props.name}
        noValidate={this.props.noValidate}
        target={this.props.target}
        ref={this.props.ref}
        onSubmit={this.props.onSubmit}
      >
        {this.props.children}
      </form>
    );
  }
}

export default Form;
