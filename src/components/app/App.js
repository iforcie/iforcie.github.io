import { Component } from 'react';

// import Header from '../app-header/AppHeader';
import AppAbout from '../app-about-coffee/AppAbout';
import AppOurBest from '../app-our-best/AppOurBest';
import AppGetMoreAbout from '../app-get-more-about/AppGetMoreAbout';
import AppFooter from '../app-footer/AppFooter';

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
