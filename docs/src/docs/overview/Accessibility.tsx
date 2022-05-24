import { Link } from 'react-router-dom';
import Next from '../utils/Next';
import Section from '../utils/Section';

function Accessibility() {
  return (
    <>
      <Section>
        <h1>Accessibility</h1>
        <p>
          Formation components come with accesibility features out of the box — like focus
          management, color contrast, and more.
        </p>
      </Section>
      <Section>
        <h3>Focus management</h3>
        <p>
          Formation implements focus states to assist users with keyboard navigation. Focus states
          help users indicate which element is currently active by applying a blue border to the
          active element.
        </p>
      </Section>
      <Section>
        <h3>Color contrast</h3>
        <p>
          Formation's <Link to='/docs/colors'>color palette</Link> is designed to both look great{' '}
          <i>and</i> adhere to WCAG 2.0 standards. We believe in building for everyone, incuding
          those who are visually impaired or experiencing any kind of colorblindness.
        </p>
      </Section>
      <Next
        next={{
          to: '/docs/colors',
          text: 'Colors →',
        }}
        back={{
          to: '/docs',
          text: '← Getting started',
        }}
      />
    </>
  );
}

export default Accessibility;
