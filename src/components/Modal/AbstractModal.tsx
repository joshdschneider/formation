import React, { createRef, CSSProperties, ReactNode, RefObject } from 'react';
import Icon from '../Icon/Icon';

type ModalProps = {
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

type ModalHeader = {
  icon?: string;
  text?: string;
};

abstract class AbstractModal extends React.Component<ModalProps> {
  modal: RefObject<HTMLDivElement> = createRef();

  componentDidMount(): void {
    if (this.props.isOpen) {
      this.openModal();
    }
  }

  componentDidUpdate(): void {
    if (this.props.isOpen) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  openModal(): void {
    this.modal.current?.setAttribute('data-show', '');

    setTimeout(() => {
      this.modal.current?.setAttribute('data-focus', '');
    }, 100);
  }

  closeModal(): void {
    this.modal.current?.removeAttribute('data-focus');

    setTimeout(() => {
      this.modal.current?.removeAttribute('data-show');
    }, 200);
  }

  getClasses(): string {
    let classList = 'modal';
    if (!!this.props.className) classList += ` ${this.props.className}`;
    return classList;
  }

  getHeader(): ReactNode {
    if (!!this.props.header) {
      let icon = this.props.header.icon ? <Icon icon={this.props.header.icon} /> : null;

      return (
        <div className='modal-header'>
          <div className='header-text'>
            {icon}
            {this.props.header.text}
          </div>
          <button className={'header-close'} onClick={() => this.props.onClose()}>
            <Icon icon={'cross'} />
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  getChildren(): ReactNode {
    return <div className={'modal-children'}>{this.props.children}</div>;
  }
}

export default AbstractModal;
