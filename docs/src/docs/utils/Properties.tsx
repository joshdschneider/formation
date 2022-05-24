type PropertiesProps = {
  wide?: boolean;
  properties: Property[];
};

type Property = {
  name: string;
  type: string;
  description: string;
};

function Properties({ wide, properties }: PropertiesProps) {
  return (
    <div className={`docs--props${wide ? ' docs--props--wide' : ''}`}>
      {properties.map((p, i) => {
        return (
          <div className='prop-container' key={i}>
            <div className='prop-name'>
              <span>{p.name}</span>
            </div>
            <div className='prop-values'>
              <span className='prop-type'>{p.type}</span>
              <p className='prop-description'>{p.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Properties;
