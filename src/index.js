import ReactDOM from 'react-dom/client';

import { GlobalSetup } from './components/GlobalSetup/GlobalSetup';
import App from './components/app/App';

import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalSetup>
    <App />
  </GlobalSetup>
);
