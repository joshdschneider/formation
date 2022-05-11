import React, { CSSProperties, ReactNode } from 'react';
import { createPopper, Instance } from '@popperjs/core';
import { Placement } from '../common/types';
import { generateId } from '../common/utils';

type PopoverProps = {
  type?: 'popover' | 'tooltip';
  action?: 'click' | 'hover';
  selector: string;
  placement?: Placement;
  content?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

type PopoverState = {
  id: string;
  popper?: Instance;
  reference?: Element;
  popover?: Element;
};

abstract class AbstractPopover extends React.Component<PopoverProps, PopoverState> {
  constructor(props: PopoverProps) {
    super(props);
    let t = this.props.type || 'popover';
    let id = t + '_' + generateId();
    this.state = {
      id,
      popper: undefined,
      reference: undefined,
      popover: undefined,
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount(): void {
    let reference = document.querySelector(this.props.selector);
    let popover = document.getElementById(this.state.id);
    let options: any = {
      modifiers: [
        {
          name: 'offset',
          options: { offset: [0, 8] },
        },
        {
          name: 'eventListeners',
          enabled: true,
        },
      ],
    };

    if (!!this.props.placement) {
      options.placement = this.props.placement;
    }

    if (!!reference && !!popover) {
      let popper = createPopper(reference, popover, options);
      this.setState({ popper, reference, popover });
      this.addEventListeners(reference);
    }
  }

  componentDidUpdate(): void {
    this.state.popper?.update();
  }

  componentWillUnmount(): void {
    if (!!this.state.reference) {
      this.removeEventListeners(this.state.reference);
    }
  }

  addEventListeners(ref: Element): void {
    if (this.props.action === 'hover') {
      let showEvents = ['mouseenter', 'focus'];
      let hideEvents = ['mouseleave', 'blur'];
      showEvents.forEach((e) => ref.addEventListener(e, this.show));
      hideEvents.forEach((e) => ref.addEventListener(e, this.hide));
    } else {
      document.addEventListener('click', this.clickHandler);
    }
  }

  removeEventListeners(ref: Element): void {
    let showEvents = ['mouseenter', 'focus'];
    let hideEvents = ['mouseleave', 'blur'];
    showEvents.forEach((e) => ref.removeEventListener(e, this.show));
    hideEvents.forEach((e) => ref.removeEventListener(e, this.hide));
    document.removeEventListener('click', this.clickHandler);
  }

  show(): void {
    this.state.popper?.update();
    let popover = this.state.popover;
    let child = popover?.querySelector('#popover-children');

    if (!!popover) {
      popover.setAttribute('data-show', '');
      setTimeout(() => {
        child?.setAttribute('data-show', '');
      }, 10);
    }
  }

  hide(): void {
    this.state.popper?.update();
    let popover = this.state.popover;
    let child = popover?.querySelector('#popover-children');

    if (!!popover) {
      child?.removeAttribute('data-show');
      setTimeout(() => {
        popover?.removeAttribute('data-show');
      }, 200);
    }
  }

  clickHandler(e: MouseEvent): void {
    let target = e.target as HTMLElement;
    let popover = this.state.popover;
    let ref = this.state.reference;
    let active = !!popover && popover.hasAttribute('data-show');
    if (!active) {
      if (ref?.contains(target)) this.show();
    } else {
      if (!popover?.contains(target)) this.hide();
    }
  }

  getClasses(): string {
    let classList = 'popover';

    if (!!this.props.type) {
      classList += ` ${this.props.type}`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }

  getId(): string {
    return this.state.id;
  }
}

export default AbstractPopover;
