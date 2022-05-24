import React from 'react';
import { IconProps } from './types';
import icons from './_icons.json';

abstract class AbstractIcon extends React.Component<IconProps> {
  getPaths() {
    let i = icons.find((i) => i.iconName === this.props.icon);

    if (!!i && !!i.paths) {
      return (
        <>
          {i.paths?.map((d) => {
            return <path key={d} d={d} />;
          })}
        </>
      );
    }

    return <path />;
  }

  getClasses(): string {
    let classList = `icon`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` icon-size--${this.props.size}`;
    }

    if (!!this.props.intent) {
      classList += ` icon-intent--${this.props.intent}`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }

  getViewbox(): string {
    return '0 0 16 16';
  }
}

export default AbstractIcon;
