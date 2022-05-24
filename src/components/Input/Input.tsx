import React from 'react';
import AbstractInput from './AbstractInput';
import './_input.scss';

class Input extends AbstractInput {
  render() {
    return (
      <div className={'input-container'}>
        <input
          type={'text'}
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          disabled={this.props.disabled}
          autoFocus={this.props.autofocus}
          placeholder={this.props.placeholder}
          readOnly={this.props.readonly}
          required={this.props.required}
          className={this.getClasses()}
          style={this.props.style}
          onChange={this.props.onChange}
          ref={this.props.ref}
        />
        {this.getIcons()}
      </div>
    );
  }
}

export default Input;
