import React from 'react';
import { EventEmitter } from 'events';
import { generateId } from '../common/utils';
import { ToastEvent, ToastProps } from './types';
import './_toast.scss';

export type ToastState = {
  toasts: Array<ToastEvent>;
  queue: Array<ToastEvent>;
};

export const toastEmitter: EventEmitter = new EventEmitter();

export abstract class AbstractToast extends React.Component<ToastProps, ToastState> {
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
