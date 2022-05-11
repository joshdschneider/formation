import React from 'react';
import Overlay from '../Overlay/Overlay';
import AbstractDrawer from './AbstractDrawer';
import './_drawer.scss';

class Drawer extends AbstractDrawer {
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

export default Drawer;
