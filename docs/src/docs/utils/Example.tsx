import { CSSProperties, ReactNode } from 'react';

type ExampleProps = {
  style?: CSSProperties;
  children: ReactNode;
};

function Example({ children, style }: ExampleProps) {
  return (
    <div className='docs--example' style={style}>
      <div className='example-elements'>{children}</div>
    </div>
  );
}

export default Example;
