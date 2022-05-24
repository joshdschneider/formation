import { FormEvent, useState } from 'react';
import { Button, Form, Input, Label, Switch } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function FormDocs() {
  const [value, setValue] = useState<string>('Hello world');
  const [alertOnSubmit, setAlertOnSubmit] = useState<boolean>(true);

  const formCode = [
    `import { useState } from 'react';`,
    `import { Form, Input, Button } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  const [value, setValue] = useState('');`,
    ` `,
    `  function handleChange(event) {`,
    `    setValue(event.target.value);`,
    `  }`,
    ` `,
    `  function handleSubmit() {`,
    `    alert(value);`,
    `  }`,
    ` `,
    `  return (`,
    `    <Form onSubmit={handleSubmit}>`,
    `      <Input value={value} onChange={handleChange} />`,
    `      <Button>Submit</Button>`,
    `    </Form>`,
    `  );`,
    `} `,
  ];

  const formProps = [
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the ID of the form.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the form.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the form.',
    },
    {
      name: 'acceptCharset',
      type: 'string',
      description: 'Specifies the character encodings to use for the form submission.',
    },
    {
      name: 'action',
      type: 'string',
      description: 'Specifies where to send the form-data when a form is submitted.',
    },
    {
      name: 'autoComplete',
      type: `'on' | 'off'`,
      description: 'Specifies whether a form should have autocomplete on or off.',
    },
    {
      name: 'encType',
      type: 'string',
      description: `Specifies how form data should be encoded when submitting to the server (only for post method).`,
    },
    {
      name: 'method',
      type: `'post' | 'get'`,
      description: 'Specifies the HTTP method to use when sending form data.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Specifies the name of the form.',
    },
    {
      name: 'noValidate',
      type: 'boolean',
      description: 'Whether the form should not be validated when submitted.',
    },
    {
      name: 'target',
      type: 'string',
      description:
        'Specifies where to display the response that is received after submitting the form.',
    },
    {
      name: 'onSubmit',
      type: 'React.FormEventHandler',
      description: 'Function to handle the form submit event.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the form element.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Form contents.',
    },
  ];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (alertOnSubmit) {
      alert(value);
    }
  }

  return (
    <>
      <Section>
        <h1>Form</h1>
        <p>Form is a lightweight wrapper around form elements (i.e. input, checkbox, button).</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Form onSubmit={handleSubmit} className='form--demo'>
              <Input autofocus={true} value={value} onChange={(e) => setValue(e.target.value)} />
              <Button intent='primary'>Submit</Button>
            </Form>
          </Example>
          <Panel>
            <h4 className='panel-header'>Example</h4>
            <div className='panel-group--switch'>
              <Switch
                id='alert'
                checked={alertOnSubmit}
                onChange={(e) => setAlertOnSubmit(e.target.checked)}
              />
              <Label for='alert' className='panel-label'>
                Alert on submit
              </Label>
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import Form from the Formation package, then wrap it around your form elements. You can
          also pass in the props you'd like to use.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={formCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={formProps} wide />
      </Section>
      <Next
        next={{
          to: '/docs/icon',
          text: 'Icon →',
        }}
        back={{
          to: '/docs/file-upload',
          text: '← File upload',
        }}
      />
    </>
  );
}

export default FormDocs;
