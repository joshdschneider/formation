import React from 'react';
import { Overlay } from '../Overlay/Overlay';
import { AbstractModal } from './AbstractModal';
import './_modal.scss';

export class Modal extends AbstractModal {
  render() {
    return (
      <Overlay
        isOpen={this.props.isOpen}
        focus={this.props.focus ?? true}
        closeOnEscapeKey={this.props.closeOnEscapeKey ?? true}
        closeOnOuterClick={this.props.closeOnOuterClick ?? true}
        onClose={this.props.onClose}
      >
        <div id={'modal'} className={this.getClasses()} style={this.props.style} ref={this.modal}>
          {this.getHeader()}
          {this.getChildren()}
        </div>
      </Overlay>
    );
  }
}
