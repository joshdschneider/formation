import { useState } from 'react';
import { Label, Select, Switch, Checkbox, Size } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function CheckboxDocs() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(true);
  const [size, setSize] = useState<Size>('regular');

  const sizeOptions = [
    { label: 'Regular', value: 'regular' },
    { label: 'Large', value: 'large' },
  ];

  const checkboxCode = [
    `import { Checkbox } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return <Checkbox label='Subscribe' size='regular' />;`,
    `} `,
  ];

  const checkboxProps = [
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the checkbox ID.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Specifies the checkbox name.',
    },
    {
      name: 'checked',
      type: 'boolean',
      description: 'Whether the checkbox is checked or not.',
    },
    {
      name: 'label',
      type: 'string',
      description: 'Text label for the checkbox.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the checkbox is non-interactive.',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether the checkbox is required.',
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
      description: 'A space-delimited list of class names to apply to the checkbox.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the checkbox.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the checkbox element.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Checkbox</h1>
        <p>A checkbox allows the user to toggle between checked and unchecked state.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Checkbox
              disabled={disabled}
              size={size}
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label={'Subscribe'}
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
        <p>Import Checkbox from the Formation package, then pass in the props you'd like to use.</p>
        <div className='code-block'>
          <Highlight language='javascript' lines={checkboxCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={checkboxProps} />
      </Section>
      <Next
        next={{
          to: '/docs/drawer',
          text: 'Drawer →',
        }}
        back={{
          to: '/docs/card',
          text: '← Card',
        }}
      />
    </>
  );
}

export default CheckboxDocs;
