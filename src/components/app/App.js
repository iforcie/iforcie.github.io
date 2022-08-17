import { Component } from 'react';

import Header from '../header/Header';
import AppAboutMain from '../../pages/app-about-us/app-about-main/AppAboutMain';
import AppBeansMain from '../../pages/app-about-beans/app-beans-main/AppBeansMain';
import AppPleasureMain from '../../pages/app-pleasure/app-pleasure-main/AppPleasureMain';
import Footer from '../footer/Footer';

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
  }

  
  render() {
    
    const app = (pageType) => {
      if (pageType === 'coffeeHouse') {
        return <AppAboutMain changePageType={this.changePageType}/>
      } else if (pageType === 'ourCoffee') {
        return <AppBeansMain changePageType={this.changePageType}/>
      } else if(pageType === 'pleasure') {
        return <AppPleasureMain changePageType={this.changePageType}/>
      }
    }

    return (
      <div className="app">
        <Header changePageType={this.changePageType} pageType={this.state.pageType} />
        {app(this.state.pageType)}
        <Footer/>
      </div>
    );
  }
}

export default App;