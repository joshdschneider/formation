import { HTMLAttributes, ReactNode } from 'react';
import { Intent } from '../common/types';

export type NativeCalloutProps = HTMLAttributes<HTMLDivElement>;

export type CustomCalloutProps = {
  intent?: Intent;
  title?: string;
  icon?: string;
  className?: string;
  children?: ReactNode;
};

export type CalloutProps = CustomCalloutProps & NativeCalloutProps;
