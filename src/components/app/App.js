import { Component } from 'react';

import AppAboutMain from '../pages/app-about-us/app-about-main/AppAboutMain';
import AppBeansMain from '../pages/app-about-beans/app-beans-main/AppBeansMain';
import AppFooter from '../app-footer/AppFooter';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <AppAboutMain /> */}
        <AppBeansMain />
        <AppFooter />
      </div>
    );
  }
}

export default App;