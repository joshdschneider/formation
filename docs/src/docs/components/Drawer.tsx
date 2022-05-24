import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, Label, Switch, Select } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

type Position = 'top' | 'bottom' | 'left' | 'right';

function DrawerDocs() {
  const [open, setOpen] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(true);
  const [closeOnEscapeKey, setCloseOnEscapeKey] = useState<boolean>(true);
  const [closeOnOuterClick, setCloseOnOuterClick] = useState<boolean>(true);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [position, setPosition] = useState<Position>('right');
  const [size, setSize] = useState<string>('300px');

  const sizeOptions = [
    { label: '300px', value: '300px' },
    { label: '50%', value: '50%' },
    { label: '75%', value: '75%' },
  ];

  const positionOptions = [
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
  ];

  const drawerCode = [
    `import { useState } from 'react';`,
    `import { Drawer, Button } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  const [open, setOpen] = useState(false);`,
    ` `,
    `  function handleOpen() {`,
    `    setOpen(true);`,
    `  }`,
    ` `,
    `  function handleClose() {`,
    `    setOpen(false);`,
    `  }`,
    ` `,
    `  return (`,
    `    <div>`,
    `      <Button onClick={handleOpen}>Open drawer</Button>`,
    `      <Drawer isOpen={open} onClose={handleClose} position='right'>`,
    `        <p>Hello from the drawer!</p>`,
    `      </Drawer>`,
    `    </div>`,
    `  );`,
    `} `,
  ];

  const drawerProps = [
    {
      name: 'isOpen',
      type: 'boolean',
      description: `Toggles the visibility of the drawer and its children. This prop is required because the component is controlled by this prop.`,
    },
    {
      name: 'onClose',
      type: '() => void',
      description:
        'A callback that is invoked when user interaction causes the drawer to close, such as clicking on the overlay or pressing the esc key (if enabled).',
    },
    {
      name: 'size',
      type: 'string',
      description:
        'CSS size of the drawer. This sets the width of horizontal position (default) or height otherwise.',
    },
    {
      name: 'position',
      type: `'top' | 'bottom' | 'left' | 'right'`,
      description: 'Position of the drawer.',
    },
    {
      name: 'header',
      type: `object`,
      description: 'Optional header for the drawer.',
    },
    {
      name: 'focus',
      type: 'boolean',
      description: `Whether the overlay should acquire a backdrop when it opens.`,
    },
    {
      name: 'closeOnEscapeKey',
      type: 'boolean',
      description: `Whether pressing the esc key should invoke onClose.`,
    },
    {
      name: 'closeOnOuterClick',
      type: 'boolean',
      description: `Whether clicking outside the overlay element (either on backdrop when present or on document) should invoke onClose.`,
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the drawer.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the drawer.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Drawer contents.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Drawer</h1>
        <p>
          Drawers overlay content over existing parts of the UI and are anchored to the edge of the
          screen. This component uses <Link to='/docs/overlay'>Overlay</Link> internally.
        </p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example style={{ padding: '20px' }}>
            <Button onClick={() => setOpen(true)} style={{ margin: '30px 0' }}>
              Open drawer
            </Button>
            <Drawer
              isOpen={open}
              onClose={() => setOpen(false)}
              position={position}
              size={size}
              focus={focus}
              closeOnEscapeKey={closeOnEscapeKey}
              closeOnOuterClick={closeOnOuterClick}
              header={showHeader ? { text: 'Header' } : undefined}
            >
              <p style={{ textAlign: 'left' }}>Hello from the drawer!</p>
            </Drawer>
          </Example>
          <Panel wide>
            <h4 className='panel-header'>Props</h4>
            <div className='panel-group--switch'>
              <Switch id='open' checked={open} onChange={(e) => setOpen(e.target.checked)} />
              <Label for='open' className='panel-label'>
                Open
              </Label>
            </div>
            <div className='panel-group--switch'>
              <Switch id='focus' checked={focus} onChange={(e) => setFocus(e.target.checked)} />
              <Label for='focus' className='panel-label'>
                Focus
              </Label>
            </div>
            <div className='panel-group--switch'>
              <Switch
                id='esc'
                checked={closeOnEscapeKey}
                onChange={(e) => setCloseOnEscapeKey(e.target.checked)}
              />
              <Label for='esc' className='panel-label'>
                Close on esc key
              </Label>
            </div>
            <div className='panel-group--switch'>
              <Switch
                id='outer-click'
                checked={closeOnOuterClick}
                onChange={(e) => setCloseOnOuterClick(e.target.checked)}
              />
              <Label for='outer-click' className='panel-label'>
                Close on outer click
              </Label>
            </div>
            <div className='panel-group--select'>
              <Label for='position' className='panel-label'>
                Position
              </Label>
              <Select
                id='position'
                options={positionOptions}
                value={position}
                onChange={(e) => setPosition(e.target.value as Position)}
                style={{ width: '100%' }}
              />
            </div>
            <h4 className='panel-header'>Example</h4>
            <div className='panel-group--switch'>
              <Switch
                id='header'
                checked={showHeader}
                onChange={(e) => setShowHeader(e.target.checked)}
              />
              <Label for='header' className='panel-label'>
                Header
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
                onChange={(e) => setSize(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import Drawer from the Formation package, then wrap it around the drawer's inner content.
          You can also pass in the props you'd like to use, such as position or size. Keep in mind,
          Drawer is controlled by the isOpen prop. You can use React's useState hook to control the
          isOpen prop, like so:
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={drawerCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={drawerProps} wide />
      </Section>
      <Next
        next={{
          to: '/docs/file-upload',
          text: 'File upload →',
        }}
        back={{
          to: '/docs/checkbox',
          text: '← Checkbox',
        }}
      />
    </>
  );
}

export default DrawerDocs;
