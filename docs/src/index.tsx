import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
