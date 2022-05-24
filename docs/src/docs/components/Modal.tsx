import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, Switch, Modal } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function ModalDocs() {
  const [open, setOpen] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(true);
  const [closeOnEscapeKey, setCloseOnEscapeKey] = useState<boolean>(true);
  const [closeOnOuterClick, setCloseOnOuterClick] = useState<boolean>(true);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  const modalCode = [
    `import { useState } from 'react';`,
    `import { Modal, Button } from '@joshdschnneider/formation';`,
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
    `      <Button onClick={handleClick}>Open modal</Button>`,
    `      <Modal isOpen={open} onClose={handleClose}>`,
    `        <p>Hello from the modal!</p>`,
    `      </Modal>`,
    `    </div>`,
    `  );`,
    `} `,
  ];

  const modalProps = [
    {
      name: 'isOpen',
      type: 'boolean',
      description: `Toggles the visibility of the modal and its children. This prop is required because the component is controlled by this prop.`,
    },
    {
      name: 'onClose',
      type: '() => void',
      description:
        'A callback that is invoked when user interaction causes the modal to close, such as clicking on the overlay or pressing the esc key (if enabled).',
    },
    {
      name: 'header',
      type: `{ text: string, icon: string }`,
      description: 'Optional header for the modal.',
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
      description: 'A space-delimited list of class names to apply to the modal.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the modal.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Modal contents.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Modal</h1>
        <p>
          A modal presents content overlaid over other parts of the UI. This component uses{' '}
          <Link to='/docs/overlay'>Overlay</Link> internally.
        </p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example style={{ padding: '20px' }}>
            <Button onClick={() => setOpen(true)} style={{ margin: '30px 0' }}>
              Open modal
            </Button>
            <Modal
              isOpen={open}
              onClose={() => setOpen(false)}
              focus={focus}
              closeOnEscapeKey={closeOnEscapeKey}
              closeOnOuterClick={closeOnOuterClick}
              header={showHeader ? { text: 'Header' } : undefined}
              style={{ minWidth: '250px' }}
            >
              <p style={{ textAlign: 'left' }}>Hello from the modal!</p>
              <br />
            </Modal>
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
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import Modal from the Formation package, then wrap it around the modal's inner content.
          You can also pass in the props you'd like to use. Keep in mind, Modal is controlled by the
          isOpen prop. You can use React's useState hook to control the isOpen prop, like so:
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={modalCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={modalProps} wide />
      </Section>
      <Next
        next={{
          to: '/docs/overlay',
          text: 'Overlay →',
        }}
        back={{
          to: '/docs/label',
          text: '← Label',
        }}
      />
    </>
  );
}

export default ModalDocs;
