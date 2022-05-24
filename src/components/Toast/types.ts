import { MouseEventHandler, ReactNode, RefObject } from 'react';
import { Intent, Position, Size } from '../common/types';

export type ToastProps = {
  id?: string;
  className?: string;
  position?: Position;
  size?: Size;
  timeout?: number;
  ref?: RefObject<HTMLDivElement>;
  children?: ReactNode;
};

export type ToastBodyProps = {
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

export type ToastEvent = {
  id?: string;
  intent?: Intent;
  text?: string;
  icon?: string;
  button?: ToastButton;
};

export type ToastButton = {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
