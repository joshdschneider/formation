import React from 'react';
import { CardProps } from './types';

abstract class AbstractCard extends React.Component<CardProps> {
  getClasses(): string {
    let classList = 'card';

    if (!!this.props.interactive) {
      classList += ` card--interactive`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }
}

export default AbstractCard;
