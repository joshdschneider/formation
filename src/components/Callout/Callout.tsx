import React from 'react';
import AbstractCallout from './AbstractCallout';
import './_callout.scss';

class Callout extends AbstractCallout {
  render() {
    return (
      <div
        id={this.props.id}
        className={this.getClasses()}
        style={this.props.style}
        ref={this.props.ref}
      >
        {this.getIcon()}
        <div className={'callout-body'}>
          {this.getTitle()}
          <div className={'callout-children'}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Callout;
