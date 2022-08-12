import { Component } from 'react';

import AppAboutMain from '../pages/app-about-us/app-about-main/AppAboutMain';
import AppFooter from '../app-footer/AppFooter';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppAboutMain />
        <AppFooter />
      </div>
    );
  }
}

export default App;