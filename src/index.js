import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Todo from './pages';
import PageProps from './pages/page_props';
import reportWebVitals from './utils/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PageProps />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
