import { useState } from 'react';
import { Button, Label, Select, Switch, Icon, Intent, Size } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function ButtonDocs() {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [minimal, setMinimal] = useState<boolean>(false);
  const [intent, setIntent] = useState<Intent>('primary');
  const [size, setSize] = useState<Size>('regular');
  const [leftIcon, setLeftIcon] = useState<boolean>(false);
  const [rightIcon, setRightIcon] = useState<boolean>(false);

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

  const buttonCode = [
    `import { Button } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return (`,
    `    <Button intent='primary' size='regular'>`,
    `       Hello World`,
    `    </Button>`,
    `  );`,
    `} `,
  ];

  const buttonProps = [
    {
      name: 'type',
      type: `'button' | 'submit' | 'reset'`,
      description: 'Specifies the type of button.',
    },
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the button ID.',
    },
    {
      name: 'name',
      type: 'string',
      description: 'Specifies the button name.',
    },
    {
      name: 'value',
      type: 'string',
      description: 'Specifies an initial value for the button.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether this button is non-interactive.',
    },
    {
      name: 'loading',
      type: 'boolean',
      description:
        'If set to true, the button will display a centered loading spinner instead of its contents, and the button will be disabled.',
    },
    {
      name: 'minimal',
      type: 'boolean',
      description: 'Whether the button should use minimal styles.',
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
      name: 'leftIcon',
      type: 'ReactNode',
      description:
        'Icon that will be positioned to the left of the button children. Use Formation icon component or another element (such as svg).',
    },
    {
      name: 'rightIcon',
      type: 'ReactNode',
      description:
        'Icon that will be positioned to the right of the button children. Use Formation icon component or another element (such as svg).',
    },
    {
      name: 'onClick',
      type: 'React.MouseEventHandler',
      description: 'Function to handle the click event.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the button.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the button.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the button element.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Button contents.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Button</h1>
        <p>Buttons trigger actions when clicked.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Button
              disabled={disabled}
              loading={loading}
              intent={intent}
              minimal={minimal}
              size={size}
              leftIcon={leftIcon ? <Icon icon='style' /> : null}
              rightIcon={rightIcon ? <Icon icon='style' /> : null}
            >
              Hello World
            </Button>
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
            <div className='panel-group--switch'>
              <Switch
                id='loading'
                checked={loading}
                onChange={(e) => setLoading(e.target.checked)}
              />
              <Label for='loading' className='panel-label'>
                Loading
              </Label>
            </div>
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
            <h4 className='panel-header panel-header--padded'>Example</h4>
            <div className='panel-group--switch'>
              <Switch
                id='left-icon'
                checked={leftIcon}
                onChange={(e) => setLeftIcon(e.target.checked)}
              />
              <Label for='left-icon' className='panel-label'>
                Left icon
              </Label>
            </div>
            <div className='panel-group--switch'>
              <Switch
                id='right-icon'
                checked={rightIcon}
                onChange={(e) => setRightIcon(e.target.checked)}
              />
              <Label for='right-icon' className='panel-label'>
                Right icon
              </Label>
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>Import Button from the Formation package, then pass in the props you'd like to use.</p>
        <div className='code-block'>
          <Highlight language='javascript' lines={buttonCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={buttonProps} />
      </Section>
      <Next
        next={{
          to: '/docs/button-group',
          text: 'Button group →',
        }}
        back={{
          to: '/docs/typography',
          text: '← Typography',
        }}
      />
    </>
  );
}

export default ButtonDocs;
