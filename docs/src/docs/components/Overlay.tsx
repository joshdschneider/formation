import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, Switch, Overlay } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function OverlayDocs() {
  const [open, setOpen] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(true);
  const [closeOnEscapeKey, setCloseOnEscapeKey] = useState<boolean>(true);
  const [closeOnOuterClick, setCloseOnOuterClick] = useState<boolean>(true);

  const overlayCode = [
    `import { useState } from 'react';`,
    `import { Overlay, Button } from '@joshdschnneider/formation';`,
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
    `      <Button onClick={handleOpen}>Open overlay</Button>`,
    `      <Overlay isOpen={open} onClose={handleClose}>`,
    `        <p>Overlaid content</p>`,
    `      </Overlay>`,
    `    </div>`,
    `  );`,
    `} `,
  ];

  const overlayProps = [
    {
      name: 'isOpen',
      type: 'boolean',
      description: `Toggles the visibility of the overlay and its children. This prop is required because the component is controlled by this prop.`,
    },
    {
      name: 'onClose',
      type: '() => void',
      description:
        'A callback that is invoked when user interaction causes the overlay to close, such as clicking on the overlay or pressing the esc key (if enabled).',
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
      name: 'children',
      type: 'ReactNode',
      description: 'Overlay contents.',
    },
  ];

  function setLeo(val: boolean) {
    let leo = document.getElementById('leo');
    if (val) {
      setOpen(true);
      setTimeout(() => {
        leo?.setAttribute('data-show', '');
      }, 100);
    } else {
      leo?.removeAttribute('data-show');
      setTimeout(() => {
        setOpen(false);
      }, 100);
    }
  }

  return (
    <>
      <Section>
        <h1>Overlay</h1>
        <p>
          A lightweight wrapper around content you'd like to present over other parts of the UI.{' '}
          <Link to={'/docs/drawer'}>Drawer</Link> and <Link to={'/docs/modal'}>Modal</Link> use the
          this component internally.
        </p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example style={{ padding: '20px' }}>
            <Button onClick={() => setLeo(true)} style={{ margin: '30px 0' }}>
              Toggle overlay
            </Button>
            <Overlay
              isOpen={open}
              onClose={() => setLeo(false)}
              focus={focus}
              closeOnEscapeKey={closeOnEscapeKey}
              closeOnOuterClick={closeOnOuterClick}
            >
              <div id='leo'>
                <img src={process.env.PUBLIC_URL + '/leo.gif'} alt='leo' />
              </div>
            </Overlay>
          </Example>
          <Panel wide>
            <h4 className='panel-header'>Props</h4>
            <div className='panel-group--switch'>
              <Switch id='open' checked={open} onChange={(e) => setLeo(e.target.checked)} />
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
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import Overlay from the Formation package, then wrap it around the content you'd like to
          overlay. Overlay is controlled by the isOpen prop. You can use React's useState hook to
          control the isOpen prop, like so:
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={overlayCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={overlayProps} wide />
      </Section>
      <Next
        next={{
          to: '/docs/popover',
          text: 'Popover →',
        }}
        back={{
          to: '/docs/modal',
          text: '← Modal',
        }}
      />
    </>
  );
}

export default OverlayDocs;
