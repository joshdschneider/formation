import { useState } from 'react';
import { Button, Card, Label, Switch } from '@joshdschneider/formation';
import Example from '../utils/Example';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Panel from '../utils/Panel';
import Properties from '../utils/Properties';
import Section from '../utils/Section';

function CardDocs() {
  const [interactive, setInteractive] = useState<boolean>(true);

  const cardCode = [
    `import { Card, Button } from '@joshdschnneider/formation';`,
    ` `,
    `function App() {`,
    `  return (`,
    `    <Card interactive={true}>`,
    `       <h3>Analytical applications</h3>`,
    `       <p>`,
    `         User interfaces that enable people to interact smoothly with`,
    `         data, ask better questions, and make better decisions.`,
    `       </p>`,
    `       <Button>Explore products</Button>`,
    `    </Card>`,
    `  );`,
    `} `,
  ];

  const cardProps = [
    {
      name: 'iteractive',
      type: 'boolean',
      description: `Whether the card should respond to user interactions. If set to true, hovering over the card will increase the card's elevation`,
    },
    {
      name: 'id',
      type: 'string',
      description: 'Specifies the ID of the card.',
    },
    {
      name: 'className',
      type: 'string',
      description: 'A space-delimited list of class names to apply to the card.',
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom CSS properties to apply to the card.',
    },
    {
      name: 'ref',
      type: 'React.RefObject',
      description: 'Ref object to attach to the card element.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Card contents.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Card</h1>
        <p>A card is a simple bounded unit of UI content.</p>
      </Section>
      <Section>
        <div className='docs--showcase'>
          <Example style={{ padding: '20px' }}>
            <Card interactive={interactive}>
              <h3 style={{ fontSize: '18px', padding: 0 }}>Analytical applications</h3>
              <p style={{ padding: '10px 0 13px 0' }}>
                User interfaces that enable people to interact smoothly with data, ask better
                questions, and make better decisions.
              </p>
              <Button intent='primary'>Explore products</Button>
            </Card>
          </Example>
          <Panel>
            <h4 className='panel-header'>Props</h4>
            <div className='panel-group--switch'>
              <Switch
                id='interactive'
                checked={interactive}
                onChange={(e) => setInteractive(e.target.checked)}
              />
              <Label for='interactive' className='panel-label'>
                Interactive
              </Label>
            </div>
          </Panel>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import Card from the Formation package, then wrap it around your content. You can also
          pass in the props you'd like to use, such as interactive.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={cardCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={cardProps} />
      </Section>
      <Next
        next={{
          to: '/docs/checkbox',
          text: 'Checkbox →',
        }}
        back={{
          to: '/docs/callout',
          text: '← Callout',
        }}
      />
    </>
  );
}

export default CardDocs;
