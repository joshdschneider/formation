import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Docs from '../docs';

function RootRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<NotFound />} />
      <Route path='/docs/*' element={<Docs />} />
    </Routes>
  );
}

export default RootRoutes;
