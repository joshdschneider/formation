import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Label, Select, Tooltip, Placement } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function TooltipDocs() {
  const [placement, setPlacement] = useState<Placement | undefined>(undefined);

  const placementOptions = [
    { label: 'None (auto)', value: '' },
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

  const tooltipCode = [
    `import { Tooltip } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  const content = <span>The password is password</span>;`,
    ` `,
    `  return (`,
    `    <div>`,
    `      <Tooltip selector='#secret_hint' content={content} />`,
    `      <p>Here's a secret <span id='secret_hint'>hint</span>.</p>`,
    `    </div>`,
    `  );`,
    `} `,
  ];

  const tooltipProps = [
    {
      name: 'selector',
      type: 'string',
      description: `The query selector of the tooltip's target element. This prop is required to assign the tooltip to the correct target element.`,
    },
    {
      name: 'placement',
      type: 'Placement',
      description:
        'The placement (relative to the target) where the tooltip should appear. Leave empty for automatic placement.',
    },
    {
      name: 'content',
      type: `ReactNode`,
      description: `The tooltip's inner contents.`,
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the tooltip.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the tooltip.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Tooltip</h1>
        <p>
          A tooltip is a lightweight <Link to={'/docs/popover'}>popover</Link> for showing
          additional information during hover interactions.
        </p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Tooltip
              selector='#foo'
              content={
                <span>
                  {`The password is `}
                  <i>password</i>
                </span>
              }
              placement={!!placement ? placement : undefined}
            />
            <p style={{ fontWeight: '500' }}>
              {`Here's a secret `}
              <span id='foo' style={{ borderBottom: '1px dashed', cursor: 'help' }}>
                hint
              </span>
              {'.'}
            </p>
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
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
          Import Tooltip from the Formation package. Assign an id (or class name) to the target
          element, then use it as the selector prop of the tooltip. Finally, pass in the inner
          contents of your tooltip to the content prop—as well as any other props you'd like to use.
          If you want the tooltip to be positioned automatically, leave the position prop empty.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={tooltipCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={tooltipProps} />
      </Section>
      <Next
        back={{
          to: '/docs/toast',
          text: '← Toast',
        }}
      />
    </>
  );
}

export default TooltipDocs;
