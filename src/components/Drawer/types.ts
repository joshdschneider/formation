import { CSSProperties, ReactNode } from 'react';

export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';

export type DrawerHeader = {
  icon?: string;
  text?: string;
};

export type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  position?: DrawerPosition;
  size?: string;
  header?: DrawerHeader;
  className?: string;
  style?: CSSProperties;
  focus?: boolean;
  closeOnEscapeKey?: boolean;
  closeOnOuterClick?: boolean;
  children?: ReactNode;
};
