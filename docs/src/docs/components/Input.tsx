import { ChangeEvent, useState } from 'react';
import { Label, Select, Switch, Input, Icon, Size } from '@joshdschneider/formation/';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function InputDocs() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [readOnly, setReadOnly] = useState<boolean>(false);
  const [leftIcon, setLeftIcon] = useState<boolean>(false);
  const [rightIcon, setRightIcon] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [size, setSize] = useState<Size>('regular');
  const [autoFocus, setAutoFocus] = useState<boolean>((): boolean => {
    let val = localStorage.getItem('formation_autofocus');
    if (!!val && val === 'false') return false;
    return true;
  });

  function persistAutofocus(val: boolean): void {
    setAutoFocus(val);
    localStorage.setItem('formation_autofocus', val.toString());
    if (val) document.getElementById('demo_input')?.focus();
  }

  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Regular', value: 'regular' },
    { label: 'Large', value: 'large' },
  ];

  const inputCode = [
    `import { useState } from 'react';`,
    `import { Input } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  const [value, setValue] = useState(null);`,
    ` `,
    `  function handleChange(event) {`,
    `    setValue(event.target.value);`,
    `  }`,
    ` `,
    `  return (`,
    `    <Input `,
    `      value={value}`,
    `      onChange={handleChange}`,
    `      autofocus={true}`,
    `      size='regular'`,
    `    />`,
    `  );`,
    `} `,
  ];

  const inputProps = [
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the ID of the input.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Specifies the name of the input.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'Value of the input.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the input is non-interactive.',
    },
    {
      name: 'autofocus',
      type: 'boolean',
      description: 'Whether the input should automatically focus when the page loads.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'A short hint that describes the expected value of an input.',
    },
    {
      name: 'readonly',
      type: 'boolean',
      description: 'Whether the input is read-only (value can not be changed).',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether an input value is required for the form to be submitted.',
    },
    {
      name: 'size',
      type: `'small' | 'regular' | 'large'`,
      description: 'Apply styles to change size (defaults to regular).',
    },
    {
      name: 'leftIcon',
      type: 'ReactNode',
      description:
        'Icon that will be positioned to the left of the input. Use Formation icon component or another element (such as svg).',
    },
    {
      name: 'rightIcon',
      type: 'ReactNode',
      description:
        'Icon that will be positioned to the right of the input. Use Formation icon component or another element (such as svg).',
    },
    {
      name: 'onChange',
      type: 'React.ChangeEventHandler',
      description: 'Function to handle the change event.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the input.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the input.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the input element.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Input</h1>
        <p>An input allows the user to enter and edit text.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Input
              autofocus={autoFocus}
              disabled={disabled}
              size={size}
              value={value}
              readonly={readOnly}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
              leftIcon={leftIcon ? <Icon icon='style' /> : null}
              rightIcon={rightIcon ? <Icon icon='style' /> : null}
              id={'demo_input'}
            />
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
            <div className='panel-group--switch'>
              <Switch
                id='autoFocus'
                checked={autoFocus}
                onChange={(e) => persistAutofocus(e.target.checked)}
              />
              <Label for='autoFocus' className='panel-label'>
                Autofocus
              </Label>
            </div>
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
                id='readOnly'
                checked={readOnly}
                onChange={(e) => setReadOnly(e.target.checked)}
              />
              <Label for='readOnly' className='panel-label'>
                Read only
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
            <h4 className='panel-header'>Example</h4>
            <div className='panel-group--switch'>
              <Switch
                id='leftIcon'
                checked={leftIcon}
                onChange={(e) => setLeftIcon(e.target.checked)}
              />
              <Label for='leftIcon' className='panel-label'>
                Left icon
              </Label>
            </div>
            <div className='panel-group--switch'>
              <Switch
                id='rightIcon'
                checked={rightIcon}
                onChange={(e) => setRightIcon(e.target.checked)}
              />
              <Label for='rightIcon' className='panel-label'>
                Right icon
              </Label>
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>Import Input from the Formation package, then pass in the props you'd like to use.</p>
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
          to: '/docs/label',
          text: 'Label →',
        }}
        back={{
          to: '/docs/icon',
          text: '← Icon',
        }}
      />
    </>
  );
}

export default InputDocs;
