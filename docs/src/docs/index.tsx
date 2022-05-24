import DocsNav from './nav';
import DocsRoutes from './routes';
import './_docs.scss';

function Docs() {
  return (
    <div className='docs--container'>
      <DocsNav />
      <DocsRoutes />
    </div>
  );
}

export default Docs;
