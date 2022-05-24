import { useState } from 'react';
import { Label, Select, Switch, Radio, Size } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function RadioDocs() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [checked, setChecked] = useState<string>('One');
  const [size, setSize] = useState<Size>('regular');

  const sizeOptions = [
    { label: 'Regular', value: 'regular' },
    { label: 'Large', value: 'large' },
  ];

  const radioCode = [
    `import { Radio } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return (`,
    `    <div>`,
    `      <Radio label='One' value='One' name='numbers' />`,
    `      <Radio label='Two' value='Two' name='numbers' />`,
    `      <Radio label='Three' label='Three' name='numbers' />`,
    `    </div>`,
    `  );`,
    `} `,
  ];

  const radioProps = [
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the radio ID.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Specifies the name of the radio group.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'Specifies the radio value.',
    },
    {
      name: 'checked',
      type: 'boolean',
      description: 'Whether the radio is checked or not.',
    },
    {
      name: 'label',
      type: 'string',
      description: 'Text label for the radio.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the radio is non-interactive.',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether the radio is required.',
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
      description: 'A space-delimited list of class names to apply to the radio.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the radio.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the radio element.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Radio</h1>
        <p>
          A radio button typically represents a single option in a mutually exclusive list (where
          only one item can be selected at a time).
        </p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <div>
              <div>
                <Radio
                  disabled={disabled}
                  size={size}
                  label={'One'}
                  value='One'
                  name='numbers'
                  onChange={() => setChecked('One')}
                  checked={checked === 'One' ? true : false}
                  style={{ margin: '10px' }}
                />
              </div>
              <div>
                <Radio
                  disabled={disabled}
                  size={size}
                  label={'Two'}
                  value='Two'
                  name='numbers'
                  onChange={() => setChecked('Two')}
                  checked={checked === 'Two' ? true : false}
                  style={{ margin: '10px' }}
                />
              </div>
              <div>
                <Radio
                  disabled={disabled}
                  size={size}
                  label={'Three'}
                  value='Three'
                  name='numbers'
                  onChange={() => setChecked('Three')}
                  checked={checked === 'Three' ? true : false}
                  style={{ margin: '10px' }}
                />
              </div>
            </div>
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
        <p>
          Import Radio from the Formation package, then pass in the props you'd like to use. Keep in
          mind, the radio group must have a shared name attribute to be treated as a group.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={radioCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={radioProps} />
      </Section>
      <Next
        next={{
          to: '/docs/select',
          text: 'Select →',
        }}
        back={{
          to: '/docs/portal',
          text: '← Portal',
        }}
      />
    </>
  );
}

export default RadioDocs;
