import React from 'react';
import { AbstractSwitch } from './AbstractSwitch';
import './_switch.scss';

export class Switch extends AbstractSwitch {
  render() {
    const { switchSize, label, className, style, children, ...rest } =
      this.props;

    return (
      <label className={this.getClasses()} style={style}>
        <input type={'checkbox'} className={'switch'} {...rest} />
        <span className={'switch-overlay'} />
        <span className={'switch-label'}>{this.getLabel()}</span>
      </label>
    );
  }
}
