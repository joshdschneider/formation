import Next from '../utils/Next';
import Section from '../utils/Section';

function NotFound() {
  return (
    <>
      <Section>
        <h1>Page not found</h1>
        <p>Docs page broken..</p>
      </Section>
      <Next
        back={{
          to: '/docs',
          text: '← Docs home',
        }}
      />
    </>
  );
}

export default NotFound;
