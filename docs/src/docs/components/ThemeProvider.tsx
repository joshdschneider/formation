import Section from '../utils/Section';
import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Properties from '../utils/Properties';

function ThemeProviderDocs() {
  const themeProviderCode = [
    `import React from 'react';`,
    `import ReactDOM from 'react-dom/client';`,
    `import App from './App';`,
    `import { ThemeProvider } from '@joshdschnneider/formation';`,
    ` `,
    `const root = ReactDOM.createRoot(`,
    `  document.getElementById('root')`,
    `);`,
    ` `,
    `root.render(`,
    `  <ThemeProvider theme='dark'>`,
    `    <App />`,
    `  </ThemeProvider>`,
    `);`,
  ];

  const themeProviderProps = [
    {
      name: 'theme',
      type: `'light' | 'dark'`,
      description: 'Whether the theme is light or dark.',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Application contents.',
    },
  ];

  return (
    <>
      <Section>
        <h1>Theme provider</h1>
        <p>
          The theme provider is an essential part of Formation. It supplies your application with
          Formation's base styles, classes, and font. You can also specify a theme (light or dark)
          with the theme prop.
        </p>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Import ThemeProvider from the Formation package, then wrap it around your application. The
          theme prop controls the component's theme. You can pass in a theme directly (as shown
          below) or use a state variable to allow the user to toggle between states.
        </p>
        <div className='code-block'>
          <Highlight language='javascript' lines={themeProviderCode} />
        </div>
      </Section>
      <Section>
        <h3>Props</h3>
        <Properties properties={themeProviderProps} />
      </Section>
      <Next
        next={{
          to: '/docs/toast',
          text: 'Toast →',
        }}
        back={{
          to: '/docs/text-area',
          text: '← Text area',
        }}
      />
    </>
  );
}

export default ThemeProviderDocs;
