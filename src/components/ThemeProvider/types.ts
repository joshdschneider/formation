import { ReactNode } from 'react';

export type ThemeProps = {
  theme: 'light' | 'dark';
  children: ReactNode;
};
