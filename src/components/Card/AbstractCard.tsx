import React, { CSSProperties, ReactNode, RefObject } from 'react';

type CardProps = {
  interactive?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  ref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
};

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
