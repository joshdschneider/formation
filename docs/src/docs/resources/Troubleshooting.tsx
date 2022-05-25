import Next from '../utils/Next';
import Section from '../utils/Section';

function Troubleshooting() {
  return (
    <>
      <Section>
        <h1>Troubleshooting</h1>
        <p>
          {`If you find any issues or bugs, please open an issue on `}
          <a
            href={'http://github.com/joshdschneider/formation/issues'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            Github
          </a>
          {`. Want to get more involved? Become a contributor—Formation is open-source and maintained by the community.`}
        </p>
      </Section>
      <Next
        back={{
          to: '/docs/contact',
          text: '← Contact',
        }}
      />
    </>
  );
}

export default Troubleshooting;
