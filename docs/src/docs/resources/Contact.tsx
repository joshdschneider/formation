import Next from '../utils/Next';
import Section from '../utils/Section';

function Contact() {
  return (
    <>
      <Section>
        <h1>Contact</h1>
        <p>
          {'Formation is 100% free and open-source, authored by '}
          <a href={'http://twitter.com/joshdschneider'} target={'_blank'} rel={'noreferrer'}>
            Josh
          </a>
          {'.'}
        </p>
        <p>
          {`If you'd like to help build and maintain the Formation project, get involved on `}
          <a
            href={'http://github.com/joshdschneider/formation'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            Github
          </a>
          {`. We still have so much left to build!`}
        </p>
      </Section>
      <Section>
        <h3>One more thing ☝️</h3>
        <p>
          {`Josh is looking for a cool new job. If you know of any interesting opportunites, feel free to shoot him an `}
          <a href={'mailto:joshds313@gmail.com'}>email</a>
          {`.`}
        </p>
      </Section>
      <Next
        next={{
          to: '/docs/troubleshooting',
          text: 'Troubleshooting →',
        }}
      />
    </>
  );
}

export default Contact;
