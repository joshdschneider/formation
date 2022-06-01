import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { Size, Intent } from '../common/types';

export type NativeAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
export type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export type CustomButtonProps = {
  loading?: boolean;
  minimal?: boolean;
  disabled?: boolean;
  size?: Size;
  intent?: Intent;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
};

export type ButtonProps = CustomButtonProps & NativeButtonProps;
export type AnchorProps = CustomButtonProps & NativeAnchorProps;