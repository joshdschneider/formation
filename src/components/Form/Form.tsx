import React, { CSSProperties, FormEventHandler, ReactNode, RefObject } from 'react';
import './_form.scss';

type FormProps = {
  id?: string;
  className?: string;
  style?: CSSProperties;
  acceptCharset?: string;
  action?: string;
  autoComplete?: string;
  encType?: string;
  method?: string;
  name?: string;
  noValidate?: boolean;
  target?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  ref?: RefObject<HTMLFormElement>;
  children?: ReactNode;
};

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
