import React from 'react';
import AbstractTextArea from './AbstractTextArea';
import './_textarea.scss';

class TextArea extends AbstractTextArea {
  render() {
    return (
      <textarea
        id={this.props.id}
        name={this.props.name}
        value={this.props.value}
        disabled={this.props.disabled}
        autoFocus={this.props.autofocus}
        placeholder={this.props.placeholder}
        cols={this.props.cols}
        rows={this.props.rows}
        readOnly={this.props.readonly}
        required={this.props.required}
        className={this.getClasses()}
        style={this.props.style}
        onChange={this.props.onChage}
        ref={this.props.ref}
      />
    );
  }
}

export default TextArea;
