import React from 'react';
import AbstractSpinner from './AbstractSpinner';
import './_spinner.scss';

class Spinner extends AbstractSpinner {
  render() {
    return <div style={this.fetchStyles()} id={this.props.id} className={this.fetchClasses()} />;
  }
}

export default Spinner;
