import React from 'react';
import Popover from '../Popover/Popover';
import AbstractTooltip from './AbstractTooltip';
import './_tooltip.scss';

class Tooltip extends AbstractTooltip {
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

export default Tooltip;
