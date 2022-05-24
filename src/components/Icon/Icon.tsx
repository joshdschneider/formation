import React from 'react';
import { AbstractIcon } from './AbstractIcon';
import './icon.scss';

export class Icon extends AbstractIcon {
  render() {
    return (
      <svg
        className={this.getClasses()}
        id={this.props.id}
        style={this.props.style}
        viewBox={this.getViewbox()}
      >
        {this.getPaths()}
      </svg>
    );
  }
}
