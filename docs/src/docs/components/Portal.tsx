import { Link } from 'react-router-dom';
import Section from '../utils/Section';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Properties from '../utils/Properties';

function PortalDocs() {
  const portalCode = [
    `import { Portal } from '@joshdschnneider/formation';`,
    ` `,
    `function Dialog() {`,
    `  return (`,
    `    <Portal>`,
    `      <div id='dialog'>`,
    `        <p>Hello from the dialog box!</p>`,
    `      </div>`,
    `    </Portal>`,
    `  );`,
    `} `,
  ];

  const portalProps = [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Portal contents.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Portal</h1>
        <p>
          The Portal component renders its children into a new subtree outside of the current DOM
          hierarchy. It is an essential piece of <Link to={'/docs/overlay'}>Overlay</Link>,
          responsible for ensuring that the overlay contents cover the application below.
        </p>
        <p>
          In most cases you do not need to use a Portal directly; this documentation is provided
          simply for reference.
        </p>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import Portal from the Formation package, then wrap it around the content you'd like to
          render outside of the current DOM hierarchy.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={portalCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={portalProps} />
      </Section>
      <Next
        next={{
          to: '/docs/radio',
          text: 'Radio →',
        }}
        back={{
          to: '/docs/popover',
          text: '← Popover',
        }}
      />
    </>
  );
}

export default PortalDocs;
