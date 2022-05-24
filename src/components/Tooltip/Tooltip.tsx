import React from 'react';
import { AbstractTooltip } from './AbstractTooltip';
import { Popover } from '../Popover/Popover';
import './_tooltip.scss';

export class Tooltip extends AbstractTooltip {
  render() {
    return (
      <Popover
        type={'tooltip'}
        action={'hover'}
        placement={this.props.placement}
        selector={this.props.selector}
        content={this.props.content}
        style={this.props.style}
        className={this.getClasses()}
      />
    );
  }
}
