import React from 'react';
import { PortalProps } from './types';

abstract class AbstractPortal extends React.Component<PortalProps> {
  page = document.body;
  portalRoot = document.createElement('div');

  componentDidMount(): void {
    this.page.appendChild(this.portalRoot);
    this.portalRoot.id = 'portal';
  }

  componentWillUnmount(): void {
    this.page.removeChild(this.portalRoot);
  }
}

export default AbstractPortal;
