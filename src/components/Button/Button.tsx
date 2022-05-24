import React from 'react';
import { AbstractButton } from './AbstractButton';
import './_button.scss';

export class Button extends AbstractButton {
  render() {
    return (
      <button
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
        id={this.props.id}
        className={this.getClasses()}
        style={this.props.style}
        onClick={this.props.onClick}
        ref={this.props.ref}
        disabled={this.getDisabled()}
      >
        {this.getChildren()}
      </button>
    );
  }
}
