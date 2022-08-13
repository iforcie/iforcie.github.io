import { Component } from 'react';

// import AppHeader from '../app-header/AppHeader';
import AppAboutMain from '../pages/app-about-us/app-about-main/AppAboutMain';
import AppBeansMain from '../pages/app-about-beans/app-beans-main/AppBeansMain';
import AppFooter from '../app-footer/AppFooter';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: 'coffeeHouse'
    }
  }

  changePageType = (newPageType) => {
    this.setState({
      pageType: newPageType
    })
    console.log(this.state.pageType);
  }

  
  render() {
    
    const app = (pageType) => {
      if (pageType === 'coffeeHouse') {
        return <AppAboutMain changePageType={this.changePageType}/>
      } else if (pageType === 'ourCoffee') {
        return <AppBeansMain changePageType={this.changePageType}/>
      }
    }

    return (
      <div className="app">
        {app(this.state.pageType)}
        <AppFooter/>
      </div>
    );
  }
}

export default App;