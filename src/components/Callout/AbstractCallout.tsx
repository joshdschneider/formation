import React, { ReactNode } from 'react';
import { CalloutProps } from './types';
import Icon from '../Icon/Icon';

abstract class AbstractCallout extends React.Component<CalloutProps> {
  getClasses(): string {
    let classList = 'callout';

    if (!!this.props.intent) {
      classList += ` callout--${this.props.intent}`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }

  getIcon(): ReactNode {
    if (!!this.props.icon) {
      return (
        <div className={'callout-icon'}>
          <Icon icon={this.props.icon} intent={this.props.intent} size={'large'} />
        </div>
      );
    }

    return null;
  }

  getTitle(): ReactNode {
    if (!!this.props.title) {
      return <h5 className={'callout-title'}>{this.props.title}</h5>;
    }

    return null;
  }
}

export default AbstractCallout;
