import React from 'react';
import Portal from '../Portal/Portal';
import AbstractOverlay from './AbstractOverlay';
import './_overlay.scss';

class Overlay extends AbstractOverlay {
  render() {
    return (
      <Portal>
        <div id='overlay' ref={this.overlay}>
          <div id='overlay-inner' ref={this.overlayInner}>
            {this.props.children}
          </div>
        </div>
      </Portal>
    );
  }
}

export default Overlay;
