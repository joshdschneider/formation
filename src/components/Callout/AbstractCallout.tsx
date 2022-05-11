import React, { CSSProperties, ReactNode, RefObject } from 'react';
import { Intent } from '../common/types';
import Icon from '../Icon/Icon';

type CardProps = {
  intent?: Intent;
  title?: string;
  icon?: string;
  showTitle?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  ref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
};

abstract class AbstractCallout extends React.Component<CardProps> {
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
