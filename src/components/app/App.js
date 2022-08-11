import { Component } from 'react';

// import Header from '../app-header/AppHeader';
import AppAbout from '../pages/app-about-us/app-about-coffee/AppAbout';
import AppOurBest from '../pages/app-about-us/app-our-best/AppOurBest';
import AppGetMoreAbout from '../pages/app-about-us/app-get-more-about/AppGetMoreAbout';
import AppFooter from '../app-footer/AppFooter';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppGetMoreAbout />
        <AppAbout />
        <AppOurBest />
        <AppFooter />
      </div>
    );
  }
}

export default App;
