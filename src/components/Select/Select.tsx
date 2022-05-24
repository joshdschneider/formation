import React from 'react';
import { AbstractSelect } from './AbstractSelect';
import './_select.scss';

export class Select extends AbstractSelect {
  render() {
    return (
      <span className={'select-container'}>
        <select
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          required={this.props.required}
          className={this.getClasses()}
          style={this.props.style}
          onChange={this.props.onChange}
          ref={this.props.ref}
          disabled={this.props.disabled}
        >
          {this.getOptions()}
        </select>
        {this.getIcon()}
      </span>
    );
  }
}
