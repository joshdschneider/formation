import React from 'react';
import AbstractPopover from './AbstractPopover';
import './_popover.scss';

class Popover extends AbstractPopover {
  render() {
    return (
      <div
        id={this.getId()}
        role={this.props.type || 'popover'}
        style={this.props.style}
        className={this.getClasses()}
      >
        <div id={'popover-children'}>
          {this.props.content}
          <div id='arrow' data-popper-arrow />
        </div>
      </div>
    );
  }
}

export default Popover;
