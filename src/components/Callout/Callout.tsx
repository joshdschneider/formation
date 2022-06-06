import React from 'react';
import { AbstractCallout } from './AbstractCallout';
import './_callout.scss';

export class Callout extends AbstractCallout {
  render() {
    const { intent, title, icon, className, children, ...rest } = this.props;

    const targetProps = {
      className: this.getClasses(),
      ...rest,
    };

    return (
      <div {...targetProps}>
        {this.getIcon()}
        <div className={'callout-body'}>
          {this.getTitle()}
          <div className={'callout-children'}>{children}</div>
        </div>
      </div>
    );
  }
}
