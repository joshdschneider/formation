import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  children: ReactNode;
};

function Section({ id, children }: SectionProps) {
  return (
    <div className='docs-section' id={id}>
      {children}
    </div>
  );
}

export default Section;
