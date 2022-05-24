import { ChangeEvent, useState } from 'react';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';
import {
  Label,
  Select,
  Icon,
  Icons,
  Input,
  IconData,
  Intent,
  Size,
} from '@joshdschneider/formation';

function IconDocs() {
  const [icon, setIcon] = useState<string>('style');
  const [intent, setIntent] = useState<Intent>('default');
  const [size, setSize] = useState<Size>('regular');
  const [query, setQuery] = useState<string>('');
  const [iconList, setIconList] = useState<IconData[]>(Icons);

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

  const iconOptions = [
    { label: 'Style', value: 'style' },
    { label: 'Cross', value: 'cross' },
  ];

  const iconCode = [
    `import { Icon } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return (`,
    `    <Icon icon='style' intent='default' size='regular' />`,
    `  );`,
    `} `,
  ];

  const iconProps = [
    {
      name: 'icon',
      type: 'string',
      description: 'Specifies which Formation icon to render.',
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
      name: 'id',
      type: 'string',
      description: 'Specifies the icon ID.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the icon.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the icon.',
    },
  ];

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    let q = e.target.value.toLowerCase();
    let i = Icons;
    setQuery(q);
    setIconList(i.filter((o) => o.iconName?.includes(q) || o.tags?.includes(q)));
  }

  return (
    <>
      <Section>
        <h1>Icon</h1>
        <p>The Icon component is used to render a Formation svg icon.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example>
            <Icon icon={icon} intent={intent} size={size} />
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
            <div className='panel-group--select'>
              <Label for='icon' className='panel-label'>
                Icon
              </Label>
              <Select
                id='icon'
                options={iconOptions}
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import Icon from the Formation package, then pass in the props you'd like to use.
          Formation provides <a href='#search_icons'>300+ vector UI icons</a> to choose from.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={iconCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={iconProps} />
      </Section>
      <Section id={'search_icons'}>
        <h3>Icons</h3>
        <p>Formation provides 300+ vector UI icons to choose from.</p>
        <div className='icons-anchor'>
          <div className='icons-container'>
            <div className='icons-search'>
              <Input
                leftIcon={<Icon icon='style' />}
                placeholder={'Search icons'}
                value={query}
                onChange={handleChange}
              />
            </div>
            <div className='icons-list'>
              {iconList.map((o, i) => {
                let icon = o as IconData;
                return (
                  <div key={i} className='icon-container'>
                    <Icon icon={icon.iconName ?? ''} />
                    <span className='icon-name'>{icon.iconName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
      <Next
        next={{
          to: '/docs/input',
          text: 'Input →',
        }}
        back={{
          to: '/docs/form',
          text: '← Form',
        }}
      />
    </>
  );
}

export default IconDocs;
