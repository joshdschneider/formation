import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Section from '../utils/Section';

function Typography() {
  const fontExample = [
    `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');`,
    ` `,
    `$font-family: 'Inter';`,
    `$blue3: #2D72D2;`,
    ` `,
    `.cool-text {`,
    `  font-family: $font-family;`,
    `  font-size: 16px;`,
    `  color: $blue3;`,
    `} `,
  ];

  return (
    <>
      <Section>
        <h1>Typography</h1>
      </Section>
      <Section>
        <h3>Font</h3>
        <p>
          {'Formation uses the '}
          <a href='https://fonts.google.com/specimen/Inter' target='_blank' rel='noreferrer'>
            Inter
          </a>{' '}
          font by default. The base font size for Formation components is 16px. This should be the
          default type size for most short strings of text which are not headings or titles.
        </p>
        <p>
          The default text color in all components is compliant with the recommended WCAG 2.0
          minimum contrast ratio. If you choose to go with a custom text color, be sure the
          background behind it provides proper contrast.
        </p>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          Inter font will not be loaded automatically by Formation, but you can add it to your
          application for free pretty quickly. If you're using Sass, you can import Inter directly
          into your Sass file from Google Fonts (as shown below). If not, you can load Inter with an
          HTML link tag or install it with npm via fontsource.
        </p>
        <div className='code-block'>
          <Highlight language='sass' lines={fontExample} />
        </div>
      </Section>
      <Next
        back={{
          to: '/docs/colors',
          text: '← Colors',
        }}
      />
    </>
  );
}

export default Typography;
