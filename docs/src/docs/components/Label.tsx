import { useState } from 'react';
import { Label, Select, Switch, Input, Size } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function LabelDocs() {
  const [inline, setInline] = useState<boolean>(false);
  const [size, setSize] = useState<Size>('regular');

  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Regular', value: 'regular' },
    { label: 'Large', value: 'large' },
  ];

  const labelCode = [
    `import { Label, Input } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return (`,
    `    <div>`,
    `      <Label for='name'>Name</Label>`,
    `      <Input id='name' />`,
    `    </div>`,
    `  );`,
    `} `,
  ];

  const labelProps = [
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the ID of the label.',
    },
    {
      name: 'for',
      type: 'string',
      description: 'Specifies the id of the element the label should be bound to.',
    },
    {
      name: 'inline',
      type: 'boolean',
      description: 'Whether the label should be positioned inline.',
    },
    {
      name: 'size',
      type: `'small' | 'regular' | 'large'`,
      description: 'Apply styles to change size (defaults to regular).',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Label contents.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Label</h1>
        <p>Labels enhance the usability of your input elements.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <div>
              <Label for='hello_world' inline={inline} size={size}>
                Name
              </Label>
              <Input id='hello_world' size={size} />
            </div>
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
            <div className='panel-group--switch'>
              <Switch id='inline' checked={inline} onChange={(e) => setInline(e.target.checked)} />
              <Label for='inline' className='panel-label'>
                Inline
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
          Import Label from the Formation package, then pass in the props you'd like to use. You can
          wrap the label around your form elements or use the 'for' prop to bind the label to the
          form element.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={labelCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={labelProps} />
      </Section>
      <Next
        next={{
          to: '/docs/modal',
          text: 'Modal →',
        }}
        back={{
          to: '/docs/input',
          text: '← Input',
        }}
      />
    </>
  );
}

export default LabelDocs;
