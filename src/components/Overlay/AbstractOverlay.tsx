import React, { createRef, RefObject } from 'react';
import { OverlayProps } from './types';

export abstract class AbstractOverlay extends React.Component<OverlayProps> {
  overlay: RefObject<HTMLDivElement> = createRef();
  overlayInner: RefObject<HTMLDivElement> = createRef();
  page: HTMLElement = document.body;

  constructor(props: OverlayProps) {
    super(props);
    this.escapeKeyHandler = this.escapeKeyHandler.bind(this);
    this.outsideClickHandler = this.outsideClickHandler.bind(this);
  }

  componentDidMount(): void {
    if (this.props.isOpen) {
      this.addOverlay();
      this.addEscapeKeyListener();
      this.addOuterClickListener();
    }
  }

  componentDidUpdate(): void {
    if (this.props.isOpen) {
      this.addOverlay();
      this.addEscapeKeyListener();
      this.addOuterClickListener();
    } else {
      this.removeOverlay();
      this.removeEscapeKeyListener();
      this.removeOuterClickListener();
    }
  }

  componentWillUnmount(): void {
    this.removeEscapeKeyListener();
    this.removeOuterClickListener();
  }

  addOverlay(): void {
    this.overlay.current?.setAttribute('data-show', '');
    if (!!this.props.focus) {
      setTimeout(() => {
        this.overlay.current?.setAttribute('data-focus', '');
      }, 100);
    }
  }

  removeOverlay(): void {
    if (!!this.props.focus) {
      this.overlay.current?.removeAttribute('data-focus');
    }
    setTimeout(() => {
      this.overlay.current?.removeAttribute('data-show');
    }, 200);
  }

  addEscapeKeyListener(): void {
    if (!!this.props.closeOnEscapeKey) {
      this.page.addEventListener('keydown', this.escapeKeyHandler);
    }
  }

  removeEscapeKeyListener(): void {
    this.page.removeEventListener('keydown', this.escapeKeyHandler);
  }

  escapeKeyHandler(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.onClose();
    }
  }

  addOuterClickListener(): void {
    if (!!this.props.closeOnOuterClick) {
      this.overlay.current?.addEventListener('click', this.outsideClickHandler);
    }
  }

  removeOuterClickListener(): void {
    this.overlay.current?.removeEventListener('click', this.outsideClickHandler);
  }

  outsideClickHandler(e: MouseEvent): void {
    let target = e.target as HTMLElement;
    let inner = this.overlay.current?.firstChild as HTMLElement;
    if (!inner.contains(target)) {
      this.onClose();
    }
  }

  onClose(): void {
    if (!!this.props.onClose) {
      this.props.onClose();
    }
  }
}
