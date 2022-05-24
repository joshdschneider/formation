import React from 'react';
import { AbstractSpinner } from './AbstractSpinner';
import './_spinner.scss';

export class Spinner extends AbstractSpinner {
  render() {
    return <div style={this.getStyles()} id={this.props.id} className={this.getClasses()} />;
  }
}
