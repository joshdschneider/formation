import React from 'react';
import { AbstractSelect } from './AbstractSelect';
import './_select.scss';

export class Select extends AbstractSelect {
  render() {
    const { selectSize, minimal, intent, className, options, ...rest } =
      this.props;

    const targetProps = {
      className: this.getClasses(),
      ...rest,
    };

    return (
      <span className={'select-container'}>
        <select {...targetProps}>{this.getOptions()}</select>
        {this.getIcon()}
      </span>
    );
  }
}
