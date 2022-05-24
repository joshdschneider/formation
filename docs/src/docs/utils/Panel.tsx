import { ReactNode } from 'react';

type PanelProps = {
  wide?: boolean;
  children: ReactNode;
};

function Panel({ wide, children }: PanelProps) {
  return <div className={`docs--panel${wide ? ' docs--panel--wide' : ''}`}>{children}</div>;
}

export default Panel;
