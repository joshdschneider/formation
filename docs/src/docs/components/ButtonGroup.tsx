import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Label,
  Select,
  Switch,
  Intent,
  Size,
} from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function ButtonGroupDocs() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [minimal, setMinimal] = useState<boolean>(false);
  const [intent, setIntent] = useState<Intent>('default');
  const [size, setSize] = useState<Size>('regular');

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

  const buttonGroupCode = [
    `import { Button, ButtonGroup } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return (`,
    `    <ButtonGroup>`,
    `      <Button>Left</Button>`,
    `      <Button>Middle</Button>`,
    `      <Button>Right</Button>`,
    `    </ButtonGroup>`,
    `  );`,
    `} `,
  ];

  const buttonGroupProps = [
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the ID of the button group.',
    },
    {
      name: 'size',
      type: `'small' | 'regular' | 'large'`,
      description:
        'Apply styles to change size (defaults to regular). The size prop should also be passed to each child button.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the button group.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the button group.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the button group element.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Button group contents.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Button group</h1>
        <p>Button groups arrange multiple buttons in a horizontal or vertical group.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <ButtonGroup size={size}>
              <Button disabled={disabled} minimal={minimal} intent={intent} size={size}>
                Left
              </Button>
              <Button disabled={disabled} minimal={minimal} intent={intent} size={size}>
                Middle
              </Button>
              <Button disabled={disabled} minimal={minimal} intent={intent} size={size}>
                Right
              </Button>
            </ButtonGroup>
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
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
            <h4 className='panel-header'>Example</h4>
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
                id='minimal'
                checked={minimal}
                onChange={(e) => setMinimal(e.target.checked)}
              />
              <Label for='minimal' className='panel-label'>
                Minimal
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
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import ButtonGroup from the Formation package, then wrap it around your Buttons. You can
          also pass in the props you'd like to use.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={buttonGroupCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={buttonGroupProps} />
      </Section>
      <Next
        next={{
          to: '/docs/callout',
          text: 'Callout →',
        }}
        back={{
          to: '/docs/button',
          text: '← Button',
        }}
      />
    </>
  );
}

export default ButtonGroupDocs;
