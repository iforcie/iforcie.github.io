import { Component } from 'react';

import Header from '../app-header/AppHeader';
import AppAbout from '../app-about-coffee/AppAbout';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <AppAbout />
      </div>
    );
  }
}

export default App;
