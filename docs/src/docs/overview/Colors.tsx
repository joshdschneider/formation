import Highlight from '../utils/Highlight';
import Next from '../utils/Next';
import Section from '../utils/Section';

function Colors() {
  const black = [{ name: '@black', hex: '#111418' }];

  const white = [{ name: '@white', hex: '#FFFFFF' }];

  const lightGray = [
    { name: '@light-gray1', hex: '#D3D8DE' },
    { name: '@light-gray2', hex: '#DCE0E5' },
    { name: '@light-gray3', hex: '#E5E8EB' },
    { name: '@light-gray4', hex: '#EDEFF2' },
    { name: '@light-gray5', hex: '#F6F7F9' },
  ];

  const gray = [
    { name: '@gray1', hex: '#5F6B7C' },
    { name: '@gray2', hex: '#738091' },
    { name: '@gray3', hex: '#8F99A8' },
    { name: '@gray4', hex: '#ABB3BF' },
    { name: '@gray5', hex: '#C5CBD3' },
  ];

  const darkGray = [
    { name: '@dark-gray1', hex: '#1C2127' },
    { name: '@dark-gray2', hex: '#252A31' },
    { name: '@dark-gray3', hex: '#2F343C' },
    { name: '@dark-gray4', hex: '#383E47' },
    { name: '@dark-gray5', hex: '#404854' },
  ];

  const blue = [
    { name: '@blue1', hex: '#184A90' },
    { name: '@blue2', hex: '#215DB0' },
    { name: '@blue3', hex: '#2D72D2' },
    { name: '@blue4', hex: '#4C90F0' },
    { name: '@blue5', hex: '#8ABBFF' },
  ];

  const green = [
    { name: '@green1', hex: '#165A36' },
    { name: '@green2', hex: '#1C6E42' },
    { name: '@green3', hex: '#238551' },
    { name: '@green4', hex: '#32A467' },
    { name: '@green5', hex: '#72CA9B' },
  ];

  const orange = [
    { name: '@orange1', hex: '#77450D' },
    { name: '@orange2', hex: '#935610' },
    { name: '@orange3', hex: '#C87619' },
    { name: '@orange4', hex: '#EC9A3C' },
    { name: '@orange5', hex: '#FBB360' },
  ];

  const red = [
    { name: '@red1', hex: '#8E292C' },
    { name: '@red2', hex: '#AC2F33' },
    { name: '@red3', hex: '#CD4246' },
    { name: '@red4', hex: '#E76A6E' },
    { name: '@red5', hex: '#FA999C' },
  ];

  const sassExample = [
    `$blue3: #2D72D2;`,
    `$black: #111418;`,
    ` `,
    `.rule {`,
    `  color: $blue3;`,
    `  background: $black;`,
    `} `,
  ];

  return (
    <>
      <Section>
        <h1>Colors</h1>
        <p>
          Formation's color palette is designed to both look great <i>and</i> adhere to WCAG 2.0
          standards.
        </p>
      </Section>
      <Section>
        <h3>Gray scale</h3>
        <p>
          The gray scale is used for elements that frame the UI, like containers, borders, and
          drop-shadows. If you want to bring attention to a specific element (like a button for
          example), use one of the core colors.
        </p>
        <div className='color-container--black-white'>
          <div className='color-section'>
            {black.map((color, i) => {
              return (
                <div key={i} className={'color-block'} style={{ background: color.hex }}>
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                </div>
              );
            })}
          </div>
          <div className='color-section'>
            {white.map((color, i) => {
              return (
                <div key={i} className={'color-block'} style={{ background: color.hex }}>
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className='color-container--grayscale'>
          <div className='color-section'>
            {darkGray.map((color, i) => {
              return (
                <div key={i} className={'color-block'} style={{ background: color.hex }}>
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                </div>
              );
            })}
          </div>
          <div className='color-section'>
            {gray.map((color, i) => {
              return (
                <div key={i} className={'color-block'} style={{ background: color.hex }}>
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                </div>
              );
            })}
          </div>
          <div className='color-section'>
            {lightGray.map((color, i) => {
              return (
                <div key={i} className={'color-block'} style={{ background: color.hex }}>
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Section>
        <h3>Core colors</h3>
        <p>
          The core colors are used to help call attention to specific elements in the UI, like
          buttons and icons. Each core color is mapped to a visual <i>intent</i>. You can pass an
          intent to a component as a prop to style it automatically.
        </p>
        <div className='color-container--blue-green'>
          <div className='color-section'>
            {blue.map((color, i) => {
              return (
                <div key={i} className={'color-block'} style={{ background: color.hex }}>
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                </div>
              );
            })}
          </div>
          <div className='color-section'>
            {green.map((color, i) => {
              return (
                <div key={i} className={'color-block'} style={{ background: color.hex }}>
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className='color-container--orange-red'>
          <div className='color-section'>
            {orange.map((color, i) => {
              return (
                <div key={i} className={'color-block'} style={{ background: color.hex }}>
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                </div>
              );
            })}
          </div>
          <div className='color-section'>
            {red.map((color, i) => {
              return (
                <div key={i} className={'color-block'} style={{ background: color.hex }}>
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <Section>
        <h3>Usage</h3>
        <p>
          We recommend using Sass for your application styles (Formation uses Sass internally). You
          can easily set color variables in your Sass files like so:
        </p>
        <div className='code-block'>
          <Highlight language='sass' lines={sassExample} />
        </div>
      </Section>
      <Next
        next={{
          to: '/docs/typography',
          text: 'Typography →',
        }}
        back={{
          to: '/docs/accessibility',
          text: '← Accessibility',
        }}
      />
    </>
  );
}

export default Colors;
