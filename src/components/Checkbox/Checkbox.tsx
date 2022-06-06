import React from 'react';
import { AbstractCheckbox } from './AbstractCheckbox';
import './_checkbox.scss';

export class Checkbox extends AbstractCheckbox {
  render() {
    const { checkboxSize, label, className, style, children, ...rest } =
      this.props;

    return (
      <label className={this.getClasses()} style={style}>
        <input type={'checkbox'} className={'checkbox'} {...rest} />
        <span className={'checkbox-overlay'} />
        <span className={'checkbox-label'}>{this.getLabel()}</span>
      </label>
    );
  }
}
