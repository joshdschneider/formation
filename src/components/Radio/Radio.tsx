import React from 'react';
import { AbstractRadio } from './AbstractRadio';
import './_radio.scss';

export class Radio extends AbstractRadio {
  render() {
    return (
      <label
        className={this.getClasses()}
        htmlFor={this.props.id || undefined}
        style={this.props.style}
      >
        <input
          type={'radio'}
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          checked={this.props.checked}
          disabled={this.props.disabled}
          required={this.props.required}
          className={'radio'}
          onChange={this.props.onChange}
          ref={this.props.ref}
        />
        <span className={'radio-overlay'} />
        <span className={'radio-label'}>{this.getLabel()}</span>
      </label>
    );
  }
}
