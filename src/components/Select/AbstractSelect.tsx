import React, { ChangeEventHandler, CSSProperties, ReactNode, RefObject } from 'react';
import { Intent, Size } from '../common/types';
import Icon from '../Icon/Icon';

type SelectProps = {
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  size?: Size;
  minimal?: boolean;
  intent?: Intent;
  className?: string;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  ref?: RefObject<HTMLSelectElement>;
  options?: Array<OptionGroup | Option>;
};

type OptionGroup = {
  label: string;
  options: Array<Option>;
};

type Option = {
  label: string;
  value: string;
};

abstract class AbstractSelect extends React.Component<SelectProps> {
  getClasses(): string {
    let classList = `select`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` select-size--${this.props.size}`;
    }

    if (!!this.props.intent && this.props.intent !== 'default') {
      classList += ` select-intent--${this.props.intent}`;
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
                  return <option key={n} label={o.label || o.value} value={o.value} />;
                })}
              </optgroup>
            );
          } else if ('value' in item) {
            return <option key={i} label={item.label || item.value} value={item.value} />;
          } else {
            return null;
          }
        })
      : null;
  }

  getIconClasses(): string {
    let classList = `select-icon`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` select-icon--${this.props.size}`;
    }

    if (!!this.props.intent && this.props.intent !== 'default') {
      classList += ` select-icon--${this.props.intent}`;
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
        size={this.props.size}
        className={this.getIconClasses()}
      />
    );
  }
}

export default AbstractSelect;
