import { useState } from 'react';
import { Button, Label, Select, Popover, Placement } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function PopoverDocs() {
  const [action, setAction] = useState<string>('click');
  const [placement, setPlacement] = useState<Placement | undefined>(undefined);

  const actionOptions = [
    { label: 'Hover', value: 'hover' },
    { label: 'Click', value: 'click' },
  ];

  const placementOptions = [
    { label: 'Auto', value: '' },
    { label: 'top', value: 'top' },
    { label: 'top-start', value: 'top-start' },
    { label: 'top-end', value: 'top-end' },
    { label: 'bottom', value: 'bottom' },
    { label: 'bottom-start', value: 'bottom-start' },
    { label: 'bottom-end', value: 'bottom-end' },
    { label: 'left', value: 'left' },
    { label: 'left-start', value: 'left-start' },
    { label: 'left-end', value: 'left-end' },
    { label: 'right', value: 'right' },
    { label: 'right-start', value: 'right-start' },
    { label: 'right-end', value: 'right-end' },
  ];

  const popoverCode = [
    `import { Popover, Button } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  const content = (`,
    `    <div>`,
    `      <p>Are you sure?</p>`,
    `      <Button>Delete</Button>`,
    `    </div>`,
    `  );`,
    ` `,
    `  return (`,
    `    <div>`,
    `      <Popover selector='#delete_button' content={content} />`,
    `      <Button id='delete_button'>Delete</Button>`,
    `    </div>`,
    `  );`,
    `} `,
  ];

  const popoverProps = [
    {
      name: 'type',
      type: `'popover' | 'tooltip'`,
      description: 'Whether the popover is a generic popover or a tooltip.',
    },
    {
      name: 'action',
      type: `'click' | 'hover'`,
      description: 'Whether the popover should display on hover or on click.',
    },
    {
      name: 'selector',
      type: 'string',
      description: `The query selector of the popover's target element. This prop is required to assign the popover to the correct target element.`,
    },
    {
      name: 'placement',
      type: 'Placement',
      description:
        'The placement (relative to the target) where the popover should appear. Leave empty for automatic placement.',
    },
    {
      name: 'content',
      type: `ReactNode`,
      description: `The popover's inner contents.`,
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the popover.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the popover.',
    },
  ];

  const popupContent = (
    <div style={{ maxWidth: '225px' }}>
      <p style={{ padding: '0 0 10px 0' }}>Are you sure you want to delete the thing?</p>
      <Button
        intent='danger'
        onClick={() => alert(`This button doesn't actually do anything.`)}
        style={{ marginBottom: '5px' }}
      >
        Delete
      </Button>
    </div>
  );

  return (
    <>
      <Section>
        <h1>Popover</h1>
        <p>Popovers display floating content next to a target element.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Popover
              selector='#foo'
              content={popupContent}
              action={action as 'click' | 'hover'}
              placement={!!placement ? placement : undefined}
            />
            <Button intent='primary' id='foo'>
              Popover target
            </Button>
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
            <div className='panel-group--select'>
              <Label for='action' className='panel-label'>
                Action
              </Label>
              <Select
                id='action'
                options={actionOptions}
                value={action}
                onChange={(e) => setAction(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            <div className='panel-group--select'>
              <Label for='placement' className='panel-label'>
                Placement
              </Label>
              <Select
                id='placement'
                options={placementOptions}
                value={!!placement ? placement : undefined}
                onChange={(e) => setPlacement(e.target.value as Placement)}
                style={{ width: '100%' }}
              />
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import Popover from the Formation package. Assign an id (or class name) to the target
          element, then use it as the selector prop of the popover. Finally, pass in the inner
          contents of your popover to the content prop—as well as any other props you'd like to use.
          If you want the popover to be positioned automatically, leave the position prop empty.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={popoverCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={popoverProps} />
      </Section>
      <Next
        next={{
          to: '/docs/portal',
          text: 'Portal →',
        }}
        back={{
          to: '/docs/overlay',
          text: '← Overlay',
        }}
      />
    </>
  );
}

export default PopoverDocs;
