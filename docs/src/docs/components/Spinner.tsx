import { useState } from 'react';
import { Label, Select, Spinner, Intent, Size } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function SpinnerDocs() {
  const [intent, setIntent] = useState<Intent>('default');
  const [size, setSize] = useState<Size>('large');

  const intentOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
  ];

  const sizeOptions = [
    { label: 'Regular', value: 'regular' },
    { label: 'Large', value: 'large' },
  ];

  const spinnerCode = [
    `import { Spinner } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return (`,
    `    <Spinner intent='default' size='regular' />`,
    `  );`,
    `} `,
  ];

  const spinnerProps = [
    {
      name: 'size',
      type: `'small' | 'regular' | 'large'`,
      description: 'Apply styles to change size (defaults to regular).',
    },
    {
      name: 'intent',
      type: `'default' | 'primary' | 'success' | 'warning' | 'danger'`,
      description: 'Apply styles to change intent.',
    },
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the spinner ID.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the spinner.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the spinner.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Spinner</h1>
        <p>
          Spinner indicates progress in a circular fashion. Great for loading states, progress, or
          other ongoing operations.
        </p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Spinner intent={intent} size={size} />
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
            <div className='panel-group--select'>
              <Label for='intent' className='panel-label'>
                Intent
              </Label>
              <Select
                id='intent'
                options={intentOptions}
                value={intent}
                onChange={(e) => setIntent(e.target.value as Intent)}
                style={{ width: '100%' }}
              />
            </div>
            <div className='panel-group--select'>
              <Label for='size' className='panel-label'>
                Size
              </Label>
              <Select
                id='size'
                options={sizeOptions}
                value={size}
                onChange={(e) => setSize(e.target.value as Size)}
                style={{ width: '100%' }}
              />
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>Import Spinner from the Formation package, then pass in the props you'd like to use.</p>
        <div className='code-block'>
          <Highlight language='javascript' lines={spinnerCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={spinnerProps} />
      </Section>
      <Next
        next={{
          to: '/docs/switch',
          text: 'Switch →',
        }}
        back={{
          to: '/docs/select',
          text: '← Select',
        }}
      />
    </>
  );
}

export default SpinnerDocs;
