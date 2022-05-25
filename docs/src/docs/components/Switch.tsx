import { useState } from 'react';
import { Label, Select, Switch, Size } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function SwitchDocs() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(true);
  const [size, setSize] = useState<Size>('regular');

  const sizeOptions = [
    { label: 'Regular', value: 'regular' },
    { label: 'Large', value: 'large' },
  ];

  const switchCode = [
    `import { Switch } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return <Switch label='Power' size='regular' />;`,
    `} `,
  ];

  const switchProps = [
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the switch ID.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Specifies the switch name.',
    },
    {
      name: 'checked',
      type: 'boolean',
      description: 'Whether the switch is checked or not.',
    },
    {
      name: 'label',
      type: 'string',
      description: 'Text label for the switch.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the switch is non-interactive.',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether the switch is required.',
    },
    {
      name: 'size',
      type: `'regular' | 'large'`,
      description: 'Apply styles to change size (defaults to regular).',
    },
    {
      name: 'onChange',
      type: 'React.ChangeEventHandler',
      description: 'Function to handle the change event.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the switch.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the switch.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the switch element.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Switch</h1>
        <p>
          A switch is simply an alternate appearance for a checkbox that simulates on/off instead of
          checked/unchecked.
        </p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Switch
              disabled={disabled}
              size={size}
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label={'Power'}
            />
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
            <div className='panel-group--switch'>
              <Switch
                id='disabled'
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
              />
              <Label for='disabled' className='panel-label'>
                Disabled
              </Label>
            </div>
            <div className='panel-group--switch'>
              <Switch
                id='checked'
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <Label for='checked' className='panel-label'>
                Checked
              </Label>
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
        <p>Import Switch from the Formation package, then pass in the props you'd like to use.</p>
        <div className='code-block'>
          <Highlight language='javascript' lines={switchCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={switchProps} />
      </Section>
      <Next
        next={{
          to: '/docs/text-area',
          text: 'Text area →',
        }}
        back={{
          to: '/docs/spinner',
          text: '← Spinner',
        }}
      />
    </>
  );
}

export default SwitchDocs;
