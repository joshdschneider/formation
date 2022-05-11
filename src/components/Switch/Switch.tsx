import React from 'react';
import AbstractSwitch from './AbstractSwitch';
import './_switch.scss';

class Switch extends AbstractSwitch {
  render() {
    return (
      <label className={this.getClasses()}>
        <input
          type={'checkbox'}
          id={this.props.id}
          name={this.props.name}
          checked={this.props.checked}
          disabled={this.props.disabled}
          required={this.props.required}
          className={'switch'}
          onChange={this.props.onChange}
          ref={this.props.ref}
        />
        <span className={'switch-overlay'} />
        <span className={'switch-label'}>{this.getLabel()}</span>
      </label>
    );
  }
}

export default Switch;
