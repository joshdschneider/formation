import { useState } from 'react';
import { Label, Select, Switch, Intent, Size } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function SelectDocs() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [minimal, setMinimal] = useState<boolean>(false);
  const [showOptionsGroup, setShowOptionsGroup] = useState<boolean>(false);
  const [size, setSize] = useState<Size>('regular');
  const [intent, setIntent] = useState<Intent>('default');
  const [value, setValue] = useState<string>('red');

  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Regular', value: 'regular' },
    { label: 'Large', value: 'large' },
  ];

  const intentOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
  ];

  const exampleOptionsGroup = [
    {
      label: 'Colors',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Orange', value: 'orange' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
        { label: 'Indigo', value: 'indigo' },
        { label: 'Violet', value: 'violet' },
      ],
    },
    {
      label: 'Numbers',
      options: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
        { label: 'Four', value: 'four' },
      ],
    },
  ];

  const exampleOptions = [
    { label: 'Red', value: 'red' },
    { label: 'Orange', value: 'orange' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Indigo', value: 'indigo' },
    { label: 'Violet', value: 'violet' },
  ];

  const inputCode = [
    `import { useState } from 'react';`,
    `import { Select } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  const [value, setValue] = useState('red');`,
    ` `,
    `  const options = [`,
    `    { label: 'Red', value: 'red' },`,
    `    { label: 'Orange', value: 'orange' },`,
    `    { label: 'Yellow', value: 'yellow' },`,
    `    { label: 'Green', value: 'green' },`,
    `    { label: 'Blue', value: 'blue' },`,
    `    { label: 'Indigo', value: 'indigo' },`,
    `    { label: 'Violet', value: 'violet' },`,
    `  ];`,
    ` `,
    `  function handleChange(event) {`,
    `    setValue(event.target.value);`,
    `  }`,
    ` `,
    `  return (`,
    `    <Select `,
    `      options={options}`,
    `      value={value}`,
    `      onChange={handleChange}`,
    `    />`,
    `  );`,
    `} `,
  ];

  const inputProps = [
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the ID of the select element.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Specifies the name of the select element.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'Selected value of the element.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the select element is non-interactive.',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether value is required to be selected for the form to be submitted.',
    },
    {
      name: 'options',
      type: 'OptionGroup[] | Option[]',
      description: 'Array of options (or option groups) to present to the user.',
    },
    {
      name: 'minimal',
      type: 'boolean',
      description: 'Whether the select element should use minimal styles.',
    },
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
      name: 'onChange',
      type: 'React.ChangeEventHandler',
      description: 'Function to handle the change event.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the select element.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the select element.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the select element.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Select</h1>
        <p>Used to select an item from a list.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Select
              disabled={disabled}
              size={size}
              minimal={minimal}
              intent={intent}
              value={value}
              options={showOptionsGroup ? exampleOptionsGroup : exampleOptions}
              onChange={(e) => setValue(e.target.value)}
              id={'demo_input'}
              style={{ width: '220px' }}
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
                id='minimal'
                checked={minimal}
                onChange={(e) => setMinimal(e.target.checked)}
              />
              <Label for='minimal' className='panel-label'>
                Minimal
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
            <h4 className='panel-header'>Example</h4>
            <div className='panel-group--switch'>
              <Switch
                id='showOptionsGroup'
                checked={showOptionsGroup}
                onChange={(e) => setShowOptionsGroup(e.target.checked)}
              />
              <Label for='showOptionsGroup' className='panel-label'>
                Show option group
              </Label>
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import Select from the Formation package, then pass in the props you'd like to use. Keep
          in mind, the options prop accepts either a list of options or a list of option groups
          (each containing a list of options).
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={inputCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={inputProps} />
      </Section>
      <Next
        next={{
          to: '/docs/spinner',
          text: 'Spinner →',
        }}
        back={{
          to: '/docs/radio',
          text: '← Radio',
        }}
      />
    </>
  );
}

export default SelectDocs;
