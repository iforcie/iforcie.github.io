import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AboutMain } from '../../pages/AboutUs/AboutMain';
import { BeansMain } from '../../pages/AboutBeans/BeansMain';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { PleasureMain } from '../../pages/Pleasure/PleasureMain';

import 'bootstrap/dist/css/bootstrap.min.css';

const DATA = {
  data: [
    {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: uuidv4()},
    {name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99$", id: uuidv4()},
    {name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99$", id: uuidv4()},
    {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: uuidv4()},
    {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: uuidv4()},
    {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$", id: uuidv4()}
  ],
  filter: 'all',
  search: ''
};

const App = () => {
  const [pageType, setPageType] = useState('coffeeHouse');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const searchCard = useCallback((items, search) => {
		if(search.length === 0) {
      return items;
    }

		return items.filter(item => item.country.indexOf(search) > -1);
	}, []);

  const filterCards = (item, filter) => {
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

  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <AboutMain />
          </Route>
          <Route path="/coffee">
            <BeansMain data={DATA.data} />
          </Route>
          <Route path="/pleasure">
            <PleasureMain data={DATA.data} />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};
export default App;