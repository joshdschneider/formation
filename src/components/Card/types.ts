import { HTMLAttributes, ReactNode } from 'react';

export type NativeCardProps = HTMLAttributes<HTMLDivElement>;

export type CustomCardProps = {
  interactive?: boolean;
  className?: string;
  children?: ReactNode;
};

export type CardProps = CustomCardProps & NativeCardProps;
