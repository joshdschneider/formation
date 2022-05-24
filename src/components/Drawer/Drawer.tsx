import React from 'react';
import { AbstractDrawer } from './AbstractDrawer';
import { Overlay } from '../Overlay/Overlay';
import './_drawer.scss';

export class Drawer extends AbstractDrawer {
  render() {
    return (
      <Overlay
        isOpen={this.props.isOpen}
        focus={this.props.focus ?? true}
        closeOnEscapeKey={this.props.closeOnEscapeKey ?? true}
        closeOnOuterClick={this.props.closeOnOuterClick ?? true}
        onClose={this.props.onClose}
      >
        <div id={'drawer'} className={this.getClasses()} style={this.getStyles()} ref={this.drawer}>
          {this.getHeader()}
          {this.getChildren()}
        </div>
      </Overlay>
    );
  }
}
