import React, { ReactNode } from 'react';
import { SelectProps } from './types';
import { Icon } from '../Icon/Icon';

export abstract class AbstractSelect extends React.Component<SelectProps> {
  getClasses(): string {
    let classList = `select`;
    let size = this.props.selectSize;
    let intent = this.props.intent;

    if (!!size && size !== 'regular') {
      classList += ` select-size--${size}`;
    }

    if (!!intent && intent !== 'default') {
      classList += ` select-intent--${intent}`;
    }

    if (!!this.props.minimal) {
      classList += ` select--minimal`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }

  getOptions(): ReactNode {
    return this.props.options
      ? this.props.options.map((item, i) => {
          if ('options' in item) {
            return (
              <optgroup key={i} label={item.label}>
                {item.options.map((o, n) => {
                  return (
                    <option key={n} label={o.label || o.value} value={o.value}>
                      {o.label || o.value}
                    </option>
                  );
                })}
              </optgroup>
            );
          } else if ('value' in item) {
            return (
              <option
                key={i}
                label={item.label || item.value}
                value={item.value}
              >
                {item.label || item.value}
              </option>
            );
          } else {
            return null;
          }
        })
      : null;
  }

  getIconClasses(): string {
    let classList = `select-icon`;
    let size = this.props.selectSize;
    let intent = this.props.intent;

    if (!!size && size !== 'regular') {
      classList += ` select-icon--${size}`;
    }

    if (!!intent && intent !== 'default') {
      classList += ` select-icon--${intent}`;
    }

    if (!!this.props.minimal) {
      classList += ` select-icon--minimal`;
    }

    return classList;
  }

  getIcon(): ReactNode {
    return (
      <Icon
        icon={'double-caret-vertical'}
        size={this.props.selectSize}
        className={this.getIconClasses()}
      />
    );
  }
}
