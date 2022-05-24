import React from 'react';
import { AbstractCard } from './AbstractCard';
import './_card.scss';

export class Card extends AbstractCard {
  render() {
    return (
      <div
        id={this.props.id}
        className={this.getClasses()}
        style={this.props.style}
        ref={this.props.ref}
      >
        {this.props.children}
      </div>
    );
  }
}
