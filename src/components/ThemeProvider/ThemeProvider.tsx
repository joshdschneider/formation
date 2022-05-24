import React from 'react';
import { ThemeProps } from './types';
import './_theme_provider.scss';

export class ThemeProvider extends React.Component<ThemeProps> {
  componentDidMount(): void {
    document.body.classList.add(`theme`);
    document.body.classList.add(`theme-${this.props.theme}`);
  }

  componentDidUpdate(): void {
    let classList = document.body.classList;
    if (classList.contains('theme-dark')) {
      if (this.props.theme === 'light') {
        classList.replace('theme-dark', 'theme-light');
      }
    } else if (classList.contains('theme-light')) {
      if (this.props.theme === 'dark') {
        classList.replace('theme-light', 'theme-dark');
      }
    }
  }

  render() {
    return this.props.children;
  }
}
