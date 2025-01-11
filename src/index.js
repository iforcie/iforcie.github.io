import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/App';

import './style/style.scss';
import { GlobalSetup } from './components/GlobalSetup/GlobalSetup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalSetup>
    <App />
  </GlobalSetup>
);
