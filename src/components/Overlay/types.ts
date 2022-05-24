import { ReactNode } from 'react';

export type OverlayProps = {
  isOpen: boolean;
  focus?: boolean;
  closeOnEscapeKey?: boolean;
  closeOnOuterClick?: boolean;
  onClose?: () => void;
  children?: ReactNode;
};
