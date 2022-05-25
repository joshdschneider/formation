import { useState } from 'react';
import { Label, Select, Switch, TextArea, Size } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function TextAreaDocs() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [readOnly, setReadOnly] = useState<boolean>(false);
  const [resizable, setResizable] = useState<boolean>(true);
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
    if (val) document.getElementById('demo_ta')?.focus();
  }

  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Regular', value: 'regular' },
    { label: 'Large', value: 'large' },
  ];

  const textAreaCode = [
    `import { useState } from 'react';`,
    `import { TextArea } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  const [value, setValue] = useState(null);`,
    ` `,
    `  function handleChange(event) {`,
    `    setValue(event.target.value);`,
    `  }`,
    ` `,
    `  return (`,
    `    <TextArea `,
    `      value={value}`,
    `      onChange={handleChange}`,
    `      autofocus={true}`,
    `      size='regular'`,
    `    />`,
    `  );`,
    `} `,
  ];

  const textAreaProps = [
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the ID of the text area.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Specifies the name of the text area.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'Value of the text area.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the text area is non-interactive.',
    },
    {
      name: 'autofocus',
      type: 'boolean',
      description: 'Whether the text area should automatically focus when the page loads.',
    },
    {
      name: 'resizable',
      type: 'boolean',
      description: 'Whether the text area can be resized by dragging the corner.',
    },
    {
      name: 'cols',
      type: 'number',
      description: 'Specifies the visible width of a text area.',
    },
    {
      name: 'rows',
      type: 'number',
      description: 'Specifies the visible number of lines in a text area.',
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'A short hint that describes the expected value of a text area.',
    },
    {
      name: 'readonly',
      type: 'boolean',
      description: 'Whether the text area is read-only (value can not be changed).',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether a text area value is required for the form to be submitted.',
    },
    {
      name: 'size',
      type: `'small' | 'regular' | 'large'`,
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
      description: 'A space-delimited list of class names to apply to the text area.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the text area.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the text area element.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Text area</h1>
        <p>A text area allows the user to enter and edit text.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <TextArea
              autofocus={autoFocus}
              disabled={disabled}
              size={size}
              value={value}
              readonly={readOnly}
              resizable={resizable}
              onChage={(e) => setValue(e.target.value)}
              id={'demo_ta'}
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
                id='resizable'
                checked={resizable}
                onChange={(e) => setResizable(e.target.checked)}
              />
              <Label for='resizable' className='panel-label'>
                Resizable
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
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>Import TextArea from the Formation package, then pass in the props you'd like to use.</p>
        <div className='code-block'>
          <Highlight language='javascript' lines={textAreaCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={textAreaProps} />
      </Section>
      <Next
        next={{
          to: '/docs/theme-provider',
          text: 'Theme provider →',
        }}
        back={{
          to: '/docs/switch',
          text: '← Switch',
        }}
      />
    </>
  );
}

export default TextAreaDocs;
