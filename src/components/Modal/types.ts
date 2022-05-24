import { CSSProperties, ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  style?: CSSProperties;
  header?: ModalHeader;
  focus?: boolean;
  closeOnEscapeKey?: boolean;
  closeOnOuterClick?: boolean;
  children?: ReactNode;
};

export type ModalHeader = {
  icon?: string;
  text?: string;
};
