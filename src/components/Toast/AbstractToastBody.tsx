import React, { MouseEventHandler, ReactNode } from 'react';
import { Intent, Position, Size } from '../common/types';
import Icon from '../Icon/Icon';

type ToastBody = {
  intent?: Intent;
  text?: string;
  icon?: string;
  button?: ToastButton;
  id: string;
  position: Position;
  size: Size;
  timeout: number;
  remove: (id: string) => void;
  className?: string;
};

type ToastButton = {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

abstract class AbstractToastBody extends React.Component<ToastBody> {
  componentDidMount(): void {
    if (!!this.props.id) {
      let el = document.getElementById(this.props.id);
      if (!!el) this.displayToast(el);
    }
  }

  async displayToast(el: HTMLElement): Promise<void> {
    await setPosition(el, this.props.position);
    await setVisibility(el);
    await sleep(100);
    await slideIn(el, this.props.position);
    await sleep(this.props.timeout);
    await this.dismissToast(el);
  }

  async dismissToast(el: HTMLElement | null): Promise<void> {
    el = el || document.getElementById(this.props.id);
    if (!!el) {
      await slideOut(el, this.props.position);
      await sleep(100);
      this.props.remove(this.props.id);
    }
  }

  getClasses(): string {
    let classList = 'toast-body';
    if (!!this.props.intent) classList += ` toast-body--${this.props.intent}`;
    return classList;
  }

  getIcon(): ReactNode | null {
    if (!!this.props.icon) {
      return (
        <span className='toast-icon'>
          <Icon icon={this.props.icon} intent={this.props.intent} size={this.props.size} />
        </span>
      );
    } else {
      return null;
    }
  }

  getButton(): ReactNode | null {
    if (!!this.props.button) {
      let clickEvent = !!this.props.button.onClick ? this.props.button.onClick : () => null;
      let buttonText = !!this.props.button.text ? this.props.button.text : 'Info';
      return (
        <button className='toast-button' onClick={clickEvent}>
          {buttonText}
        </button>
      );
    } else {
      return null;
    }
  }

  getClose(): ReactNode {
    return (
      <button className='toast-close' onClick={() => this.dismissToast(null)}>
        <Icon icon={'cross'} size={this.props.size} />
      </button>
    );
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function setVisibility(el: HTMLElement): Promise<void> {
  el.style.visibility = 'visible';
}

async function setPosition(el: HTMLElement, pos: Position): Promise<void> {
  let width = el.offsetWidth || el.clientWidth;
  let height = el.offsetHeight || el.clientHeight;
  let offset = 60;

  switch (pos) {
    case 'top':
      el.style.top = '-' + (height + offset).toString() + 'px';
      return;
    case 'top-left':
      el.style.top = '0px';
      el.style.left = '-' + (width + offset).toString() + 'px';
      return;
    case 'top-right':
      el.style.top = '0px';
      el.style.right = '-' + (width + offset).toString() + 'px';
      return;
    case 'bottom':
      el.style.bottom = '-' + (height + offset).toString() + 'px';
      return;
    case 'bottom-left':
      el.style.bottom = '0px';
      el.style.left = '-' + (width + offset).toString() + 'px';
      return;
    case 'bottom-right':
      el.style.bottom = '0px';
      el.style.right = '-' + (width + offset).toString() + 'px';
      return;
    default:
      return;
  }
}

async function slideIn(el: HTMLElement, pos: Position): Promise<void> {
  switch (pos) {
    case 'top':
      el.style.top = '0px';
      return;
    case 'top-left':
      el.style.top = '0px';
      el.style.left = '0px';
      return;
    case 'top-right':
      el.style.top = '0px';
      el.style.right = '0px';
      return;
    case 'bottom':
      el.style.bottom = '0px';
      return;
    case 'bottom-left':
      el.style.bottom = '0px';
      el.style.left = '0px';
      return;
    case 'bottom-right':
      el.style.bottom = '0px';
      el.style.right = '0px';
      return;
    default:
      return;
  }
}

async function slideOut(el: HTMLElement, pos: Position): Promise<void> {
  let width = el.offsetWidth || el.clientWidth;
  let height = el.offsetHeight || el.clientHeight;
  let offset = 60;

  switch (pos) {
    case 'top':
      el.style.top = '-' + (height + offset).toString() + 'px';
      return;
    case 'top-left':
      el.style.left = '-' + (width + offset).toString() + 'px';
      return;
    case 'top-right':
      el.style.right = '-' + (width + offset).toString() + 'px';
      return;
    case 'bottom':
      el.style.bottom = '-' + (height + offset).toString() + 'px';
      return;
    case 'bottom-left':
      el.style.left = '-' + (width + offset).toString() + 'px';
      return;
    case 'bottom-right':
      el.style.right = '-' + (width + offset).toString() + 'px';
      return;
    default:
      return;
  }
}

export default AbstractToastBody;
