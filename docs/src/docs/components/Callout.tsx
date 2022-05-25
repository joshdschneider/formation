import { useState } from 'react';
import { Callout, Label, Select, Switch, Intent } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function CalloutDocs() {
  const [showTitle, setShowTitle] = useState<boolean>(true);
  const [showIcon, setShowIcon] = useState<boolean>(true);
  const [intent, setIntent] = useState<Intent>('default');

  const intentOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Primary', value: 'primary' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Danger', value: 'danger' },
  ];

  const calloutCode = [
    `import { Callout } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return (`,
    `    <Callout`,
    `      intent='primary'`,
    `      icon='style'`,
    `      title='Important content'`,
    `    >`,
    `       The component is a simple wrapper around your content provides`,
    `       props for modifying the title, icon, intent, and more.`,
    `    </Callout>`,
    `  );`,
    `} `,
  ];

  const calloutProps = [
    {
      name: 'icon',
      type: 'string',
      description: 'Icon that will be positioned to the left of the callout children.',
    },
    {
      name: 'title',
      type: 'string',
      description: 'Title of the callout.',
    },
    {
      name: 'intent',
      type: `'default' | 'primary' | 'success' | 'warning' | 'danger'`,
      description: 'Apply styles to change intent.',
    },
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the ID of the callout.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the callout.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the callout.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the callout element.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Callout contents.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Callout</h1>
        <p>
          Callouts visually highlight important content for the user. They can contain a title, an
          icon, and content.
        </p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example style={{ padding: '20px' }}>
            <Callout
              title={showTitle ? 'Important content' : undefined}
              icon={showIcon ? 'style' : undefined}
              intent={intent}
            >
              <p style={{ padding: 0, fontWeight: 500, lineHeight: '1.6' }}>
                The component is a simple wrapper around your content provides props for modifying
                the title, icon, intent, and more.
              </p>
            </Callout>
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
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
                id='icon'
                checked={showIcon}
                onChange={(e) => setShowIcon(e.target.checked)}
              />
              <Label for='icon' className='panel-label'>
                Show icon
              </Label>
            </div>
            <div className='panel-group--switch'>
              <Switch
                id='title'
                checked={showTitle}
                onChange={(e) => setShowTitle(e.target.checked)}
              />
              <Label for='title' className='panel-label'>
                Show title
              </Label>
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import Callout from the Formation package, then wrap it around the content you'd like to
          call out. You can also pass in the props you'd like to use, such as title, icon, etc.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={calloutCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={calloutProps} />
      </Section>
      <Next
        next={{
          to: '/docs/card',
          text: 'Card →',
        }}
        back={{
          to: '/docs/button-group',
          text: '← Button group',
        }}
      />
    </>
  );
}

export default CalloutDocs;
