import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Section from '../utils/Section';

function GettingStarted() {
  const installExample = `npm install @joshdschnneider/formation`;

  const importExample = [
    `import { Button } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return <Button intent="success">Hello World</Button>;`,
    `} `,
  ];

  return (
    <>
      <Section>
        <h1>Overview</h1>
        <p>
          Formation is a React-based component library designed to help you ship your frontend
          applications faster. 20+ free UI components and counting (contributors welcome).
        </p>
      </Section>
      <Section>
        <h3>Installation</h3>
        <p>
          Add Formation to your application with <span className='bold'>npm</span> using the command
          below:
        </p>
        <div className='code-block'>
          <span className='cli'>{installExample}</span>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>To put Formation to use, just import a component from the package like so:</p>
        <div className='code-block'>
          <Highlight language='javascript' lines={importExample} />
        </div>
      </Section>
      <Next next={{ to: '/docs/accessibility', text: 'Accessibility →' }} />
    </>
  );
}

export default GettingStarted;
