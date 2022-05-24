import React from 'react';
import { AbstractOverlay } from './AbstractOverlay';
import { Portal } from '../Portal/Portal';
import './_overlay.scss';

export class Overlay extends AbstractOverlay {
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
