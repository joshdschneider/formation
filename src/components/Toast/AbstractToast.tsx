import React, { MouseEventHandler, ReactNode, RefObject } from 'react';
import { Intent, Position, Size } from '../common/types';
import { EventEmitter } from 'events';
import { generateId } from '../common/utils';
import './_toast.scss';

type ToastProps = {
  id?: string;
  className?: string;
  position?: Position;
  size?: Size;
  timeout?: number;
  ref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
};

type ToastState = {
  toasts: Array<ToastEvent>;
  queue: Array<ToastEvent>;
};

export type ToastEvent = {
  id?: string;
  intent?: Intent;
  text?: string;
  icon?: string;
  button?: ToastButton;
};

type ToastButton = {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const toastEmitter: EventEmitter = new EventEmitter();

abstract class AbstractToast extends React.Component<ToastProps, ToastState> {
  constructor(props: ToastProps) {
    super(props);
    this.state = {
      queue: [],
      toasts: [],
    };

    this.toastEventHandler = this.toastEventHandler.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  componentDidMount(): void {
    toastEmitter.addListener('toast', this.toastEventHandler);
  }

  componentDidUpdate(): void {
    let queue = this.state.queue;
    let toasts = this.state.toasts;
    if (queue.length > 0 && !toasts.length) this.showToast(queue[0]);
  }

  componentWillUnmout(): void {
    toastEmitter.removeAllListeners('toast');
  }

  toastEventHandler(e: ToastEvent): void {
    e.id = generateId();
    this.queueToast(e);
  }

  queueToast(e: ToastEvent): void {
    this.setState({ queue: [...this.state.queue, e] });
  }

  showToast(e: ToastEvent): void {
    this.setState({ queue: this.state.queue.filter((q) => q.id !== e.id) });
    this.setState({ toasts: [...this.state.toasts, e] });
  }

  dismissToast(id: string): void {
    this.setState({ toasts: this.state.toasts.filter((t) => t.id !== id) });
  }

  getClasses(): string {
    let classList = 'toast';

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` toast--${this.props.size}`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }
}

export default AbstractToast;
