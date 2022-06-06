import React from 'react';
import { AbstractInput } from './AbstractInput';
import './_input.scss';

export class Input extends AbstractInput {
  render() {
    const { inputSize, className, leftIcon, rightIcon, ...rest } = this.props;

    const targetProps = {
      className: this.getClasses(),
      ...rest,
    };

    return (
      <div className={'input-container'}>
        <input type={'text'} {...targetProps} />
        {this.getIcons()}
      </div>
    );
  }
}
