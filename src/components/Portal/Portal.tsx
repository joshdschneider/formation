import { createPortal } from 'react-dom';
import { AbstractPortal } from './AbstractPortal';
import './_portal.scss';

export class Portal extends AbstractPortal {
  render() {
    return createPortal(this.props.children, this.portalRoot);
  }
}
