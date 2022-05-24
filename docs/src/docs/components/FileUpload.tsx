import { useState } from 'react';
import { Label, Select, Switch, FileUpload, Intent, Size } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function FileUploadDocs() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [multiple, setMultiple] = useState<boolean>(true);
  const [intent, setIntent] = useState<Intent>('default');
  const [size, setSize] = useState<Size>('regular');
  const [files, setFiles] = useState<FileList | null>(null);

  const intentOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
  ];

  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Regular', value: 'regular' },
    { label: 'Large', value: 'large' },
  ];

  const fileUploadCode = [
    `import { useState } from 'react';`,
    `import { FileUpload } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  const [files, setFiles] = useState(null);`,
    ` `,
    `  function handleChange(event) {`,
    `    setFiles(event.target.value);`,
    `  }`,
    ` `,
    `  return (`,
    `    <FileUpload `,
    `      value={files}`,
    `      onChange={handleChange}`,
    `      multiple={true}`,
    `      intent='default'`,
    `      size='regular'`,
    `      width='250px'`,
    `    />`,
    `  );`,
    `} `,
  ];

  const fileUploadProps = [
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the ID of the file input.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Specifies the name of the file input.',
    },
    {
      name: 'value',
      type: 'FileList',
      description: 'List of selected files.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the file input is non-interactive.',
    },
    {
      name: 'accept',
      type: 'string',
      description:
        'A comma-separated list of unique file type specifiers. This defines the file types the file input should accept.',
    },
    {
      name: 'multiple',
      type: 'boolean',
      description: 'Whether to allow the user to upload more than one file.',
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether a file is required for the form to be submitted.',
    },
    {
      name: 'width',
      type: 'string',
      description: 'CSS size of the file input. This sets the width of the file input container.',
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
      description: 'A space-delimited list of class names to apply to the file upload.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the file input.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the file input element.',
    },
  ];

  return (
    <>
      <Section>
        <h1>File upload</h1>
        <p>A file upload allows the user to choose one or more files from their device storage.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <FileUpload
              disabled={disabled}
              intent={intent}
              size={size}
              value={files ?? undefined}
              multiple={multiple}
              onChage={(e) => setFiles(e.target.files)}
              width={'250px'}
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
                id='multiple'
                checked={multiple}
                onChange={(e) => setMultiple(e.target.checked)}
              />
              <Label for='multiple' className='panel-label'>
                Multiple
              </Label>
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
          Import FileUpload from the Formation package, then pass in the props you'd like to use.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={fileUploadCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={fileUploadProps} />
      </Section>
      <Next
        next={{
          to: '/docs/form',
          text: 'Form →',
        }}
        back={{
          to: '/docs/drawer',
          text: '← Drawer',
        }}
      />
    </>
  );
}

export default FileUploadDocs;
