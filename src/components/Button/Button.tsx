import React from 'react';
import { AbstractButton } from './AbstractButton';
import './_button.scss';

export class Button extends AbstractButton {
  render() {
    return (
      <button className={this.getClasses()} disabled={this.getDisabled()}>
        {this.getChildren()}
      </button>
    );
  }
}
