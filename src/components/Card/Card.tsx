import React from 'react';
import { AbstractCard } from './AbstractCard';
import './_card.scss';

export class Card extends AbstractCard {
  render() {
    const { interactive, className, children, ...rest } = this.props;

    const targetProps = {
      className: this.getClasses(),
      ...rest,
    };

    return <div {...targetProps}>{children}</div>;
  }
}
