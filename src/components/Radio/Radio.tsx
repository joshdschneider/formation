import React from 'react';
import { AbstractRadio } from './AbstractRadio';
import './_radio.scss';

export class Radio extends AbstractRadio {
  render() {
    const { id, radioSize, label, className, style, children, ...rest } =
      this.props;

    const targetProps = {
      id,
      ...rest,
    };

    return (
      <label
        className={this.getClasses()}
        htmlFor={id ?? undefined}
        style={style}
      >
        <input type={'radio'} {...targetProps} />
        <span className={'radio-overlay'} />
        <span className={'radio-label'}>{this.getLabel()}</span>
      </label>
    );
  }
}
