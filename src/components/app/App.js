import { Component } from 'react';
import {v4 as uuidv4} from 'uuid';

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
      data: [
        {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: uuidv4()},
        {name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99$", id: uuidv4()},
        {name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99$", id: uuidv4()},
        {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: uuidv4()},
        {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: uuidv4()},
        {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: uuidv4()}
      ],
      pageType: 'coffeeHouse',
      filter: 'all',
      search: ''
    }
  }

  changePageType = (newPageType) => {
    this.setState({
      pageType: newPageType
    })
  }

  changeFilter = (newFilter) => {
    this.setState({
      filter: newFilter
    })
  }

  updateSearch = (search) => {
    this.setState({
      search
    });
  }

  searchCard = (items, search) => {
		if(search.length === 0) return items;

		return items.filter(item => item.country.indexOf(search) > -1);
	}

  filterCards = (item, filter) => {
    switch(filter) {
      case 'Brazil':
        return item.filter(item => item.country === 'Brazil');
      case 'Kenya':
        return item.filter(item => item.country === 'Kenya');
        case 'Columbia':
          return item.filter(item => item.country === 'Columbia');
      default:
        return item;
    }
  }
  
  render() {

    const {pageType, data, filter, search} = this.state;
    
    const app = (pageType) => {
      if (pageType === 'coffeeHouse') {
        return <AppAboutMain changePageType={this.changePageType}/>
      } else if (pageType === 'ourCoffee') {
        return <AppBeansMain 
                  data={this.filterCards(this.searchCard(data, search), filter)} 
                  changePageType={this.changePageType} 
                  changeFilter={this.changeFilter}
                  updateSearch={this.updateSearch}/>
      } else if(pageType === 'pleasure') {
        return <AppPleasureMain 
                  data={this.filterCards(data, filter)} 
                  changePageType={this.changePageType} 
                  changeFilter={this.changeFilter}/>
      }
    }

    return (
      <div className="app">
        <Header changePageType={this.changePageType} pageType={pageType} />
        {app(this.state.pageType)}
        <Footer/>
      </div>
    );
  }
}

export default App;