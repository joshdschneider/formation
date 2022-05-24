import { useState } from 'react';
import {
  Button,
  Label,
  Select,
  Switch,
  Toast,
  toast,
  Intent,
  Position,
  Size,
} from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function ToastDocs() {
  const [intent, setIntent] = useState<Intent>('success');
  const [size, setSize] = useState<Size>('regular');
  const [position, setPosition] = useState<Position>('top');
  const [timeout, setTimeout] = useState<string>('3000');
  const [showButton, setShowButton] = useState<boolean>(true);
  const [showIcon, setShowIcon] = useState<boolean>(true);

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

  const positionOptions = [
    { label: 'Top', value: 'top' },
    { label: 'Top left', value: 'top-left' },
    { label: 'Top right', value: 'top-right' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom left', value: 'bottom-left' },
    { label: 'Bottom right', value: 'bottom-right' },
  ];

  const timeoutOptions = [
    { label: '1000', value: '1000' },
    { label: '3000', value: '3000' },
    { label: '5000', value: '5000' },
  ];

  const toastCode = [
    `import { Toast, toast, Button } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  function handleClick() {`,
    `    toast({`,
    `      intent: 'success',`,
    `      text: 'Thanks for subscribing!',`,
    `      icon: 'style',`,
    `      button: {`,
    `        text: 'Undo',`,
    `        onClick: () => alert('Are you sure?'),`,
    `      },`,
    `    });`,
    `  }`,
    ` `,
    `  return (`,
    `    <div>`,
    `      <Button onClick={handleClick}>Say thanks</Button>`,
    `      <Toast position='top' timeout={3000} />`,
    `    </div>`,
    `  );`,
    `} `,
  ];

  const toastProps = [
    {
      name: 'position',
      type: 'Position',
      description: 'Specifies the area of the screen where the toast will appear.',
    },
    {
      name: 'timeout',
      type: 'number',
      description:
        'Milliseconds to wait before automatically dismissing toast. Default is 3000 (3 seconds).',
    },
    {
      name: 'size',
      type: `'small' | 'regular' | 'large'`,
      description: 'Apply styles to change size (defaults to regular).',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the toast container.',
    },
  ];

  function fireToast() {
    const t = getToastFromIntent();

    toast({
      intent: intent,
      text: t.text,
      icon: showIcon ? t.icon : undefined,
      button: showButton ? t.button : undefined,
    });
  }

  function getToastFromIntent() {
    switch (intent) {
      case 'default':
        return {
          buttonName: 'Move files',
          text: 'Moved 6 files.',
          icon: 'style',
          button: {
            text: 'Undo',
            onClick: () => alert('Moved 6 files back.'),
          },
        };
      case 'primary':
        return {
          buttonName: 'Log in',
          text: `Welcome! Glad you're here.`,
          icon: 'style',
          button: {
            text: 'Info',
            onClick: () => alert('Account not real.'),
          },
        };
      case 'success':
        return {
          buttonName: 'Create user',
          text: 'User created successfully.',
          icon: 'style',
          button: {
            text: 'Undo',
            onClick: () => alert('Are you sure?'),
          },
        };
      case 'warning':
        return {
          buttonName: 'Log out',
          text: `You've been logged out.`,
          icon: 'style',
          button: {
            text: 'Bye',
            onClick: () => alert('Adios!'),
          },
        };
      case 'danger':
        return {
          buttonName: `Don't click`,
          text: `Seriously, don't click 👉`,
          icon: 'style',
          button: {
            text: `Button`,
            onClick: () => window.open('http://youtube.com/watch?v=dQw4w9WgXcQ', '_blank'),
          },
        };
      default:
        return {
          buttonName: 'default button',
          text: 'default button',
          icon: 'style',
          button: {
            text: 'Undo',
            onClick: () => alert('default button'),
          },
        };
    }
  }

  return (
    <>
      <Section>
        <h1>Toast</h1>
        <p>A toast is a lightweight, ephemeral notice from your application.</p>
      </Section>
      <Toast position={position} timeout={Number(timeout)} size={size} />
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Button onClick={fireToast} intent={intent}>
              {getToastFromIntent().buttonName}
            </Button>
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
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
                id='show_icon'
                checked={showIcon}
                onChange={(e) => setShowIcon(e.target.checked)}
              />
              <Label for='show_icon' className='panel-label'>
                Icon
              </Label>
            </div>
            <div className='panel-group--switch'>
              <Switch
                id='show_button'
                checked={showButton}
                onChange={(e) => setShowButton(e.target.checked)}
              />
              <Label for='show_button' className='panel-label'>
                Button
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
              <Label for='timeout' className='panel-label'>
                Timeout
              </Label>
              <Select
                id='timeout'
                options={timeoutOptions}
                value={timeout}
                onChange={(e) => setTimeout(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import both the Toast <i>component</i> and the toast <i>function</i> from the Formation
          package. The Toast component is a stateful container for your toast elements—you can set
          props like position and size here. The toast function actually creates a toast and
          displays it to the user. The toast function has one parameter—an object that describes the
          toast text, icon, button (text and on-click function), and intent of the toast.
        </p>
        <p>
          If you don't include a Toast component somewhere in your application, it will get created
          and rendered on-the-fly when you call the toast function the first time.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={toastCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={toastProps} />
      </Section>
      <Next
        next={{
          to: '/docs/tooltip',
          text: 'Tooltip →',
        }}
        back={{
          to: '/docs/theme-provider',
          text: '← Theme provider',
        }}
      />
    </>
  );
}

export default ToastDocs;
