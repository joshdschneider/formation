import React from 'react';
import { AbstractToast, toastEmitter } from './AbstractToast';
import { ToastEvent } from './types';
import { AbstractToastBody } from './AbstractToastBody';
import { createRoot } from 'react-dom/client';
import { Portal } from '../Portal/Portal';
import './_toast.scss';

export class Toast extends AbstractToast {
  render() {
    const { toasts } = this.state;

    return (
      <Portal>
        <div id={'toast'} className={this.getClasses()}>
          {toasts.map((toast, i) => {
            return (
              <ToastBody
                key={i}
                intent={toast.intent}
                text={toast.text}
                icon={toast.icon}
                button={toast.button}
                id={toast.id || ''}
                position={this.props.position || 'top'}
                size={this.props.size || 'regular'}
                timeout={this.props.timeout || 3000}
                remove={this.dismissToast}
              />
            );
          })}
        </div>
      </Portal>
    );
  }
}

export class ToastBody extends AbstractToastBody {
  render() {
    return (
      <div id={this.props.id} className={this.getClasses()} style={{ visibility: 'hidden' }}>
        {this.getIcon()}
        <span className={'toast-text'}>{this.props.text}</span>
        {this.getButton()}
        {this.getClose()}
      </div>
    );
  }
}

export function createToastRoot(): void {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = createRoot(div);
  root.render(<Toast />);
  div.remove();
}

export function toast(event: ToastEvent): void {
  const toastRoot = document.getElementById('toast');
  if (!toastRoot) {
    createToastRoot();
    setTimeout(() => {
      toastEmitter.emit('toast', event);
    }, 400);
  } else {
    toastEmitter.emit('toast', event);
  }
}
