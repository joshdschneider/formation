import React, { createRef, CSSProperties, ReactNode, RefObject } from 'react';
import Icon from '../Icon/Icon';

type Position = 'top' | 'bottom' | 'left' | 'right';

type ModalHeader = {
  icon?: string;
  text?: string;
};

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  position?: Position;
  size?: string;
  header?: ModalHeader;
  className?: string;
  style?: CSSProperties;
  focus?: boolean;
  closeOnEscapeKey?: boolean;
  closeOnOuterClick?: boolean;
  children?: ReactNode;
};

abstract class AbstractDrawer extends React.Component<DrawerProps> {
  drawer: RefObject<HTMLDivElement> = createRef();

  componentDidMount(): void {
    if (this.props.isOpen) {
      this.openDrawer();
    }
  }

  componentDidUpdate(): void {
    if (this.props.isOpen) {
      this.openDrawer();
    } else {
      this.closeDrawer();
    }
  }

  openDrawer(): void {
    this.drawer.current?.setAttribute('data-show', '');

    setTimeout(() => {
      if (!!this.drawer.current) {
        slideIn(this.drawer.current, this.props.position ?? 'left');
      }
    }, 100);
  }

  closeDrawer(): void {
    if (!!this.drawer.current) {
      slideOut(this.drawer.current, this.props.position ?? 'left', this.props.size ?? '50%');
    }

    setTimeout(() => {
      this.drawer.current?.removeAttribute('data-show');
    }, 200);
  }

  getClasses(): string {
    let classList = 'drawer';

    if (!!this.props.position) {
      classList += ` drawer--${this.props.position}`;
    } else {
      classList += ` drawer--left`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }

  getStyles(): CSSProperties {
    let pos = this.props.position ?? 'left';
    let size = this.props.size ?? '50%';
    let pad = '100px';
    let styles: CSSProperties = {};

    switch (pos) {
      case 'top':
        styles.top = `calc(-${size} - ${pad})`;
        styles.height = size;
        break;
      case 'bottom':
        styles.bottom = `calc(-${size} - ${pad})`;
        styles.height = size;
        break;
      case 'left':
        styles.left = `calc(-${size} - ${pad})`;
        styles.width = size;
        break;
      case 'right':
        styles.right = `calc(-${size} - ${pad})`;
        styles.width = size;
        break;
      default:
        break;
    }

    return {
      ...styles,
      ...this.props.style,
    };
  }

  getHeader(): ReactNode {
    if (!!this.props.header) {
      let icon = this.props.header.icon ? <Icon icon={this.props.header.icon} /> : null;

      return (
        <div className='drawer-header'>
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
    return <div className={'drawer-children'}>{this.props.children}</div>;
  }
}

function slideIn(el: HTMLDivElement, pos: Position): void {
  switch (pos) {
    case 'top':
      el.style.top = `0px`;
      return;
    case 'bottom':
      el.style.bottom = `0px`;
      break;
    case 'left':
      el.style.left = `0px`;
      break;
    case 'right':
      el.style.right = `0px`;
      break;
    default:
      break;
  }
}

function slideOut(el: HTMLDivElement, pos: Position, size: string): void {
  let pad = '100px';

  switch (pos) {
    case 'top':
      el.style.top = `calc(-${size} - ${pad})`;
      return;
    case 'bottom':
      el.style.bottom = `calc(-${size} - ${pad})`;
      break;
    case 'left':
      el.style.left = `calc(-${size} - ${pad})`;
      break;
    case 'right':
      el.style.right = `calc(-${size} - ${pad})`;
      break;
    default:
      break;
  }
}

export default AbstractDrawer;
