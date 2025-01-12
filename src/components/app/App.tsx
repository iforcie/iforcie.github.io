import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AboutMain } from '../../pages/AboutUs/AboutMain';
import { BeansMain } from '../../pages/AboutBeans/BeansMain';
import { DATA } from '../../data/data';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { PleasureMain } from '../../pages/Pleasure/PleasureMain';
import { useFilter } from '../../hooks/useFilter';
import { useSearch } from '../../hooks/useSearch';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { filterCards, filter } = useFilter();
  const { searchCard } = useSearch();

  const filteredAndSearchedData = filterCards(searchCard(DATA), filter);

  return (
    <div className='app'>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <AboutMain />
          </Route>
          <Route path='/coffee'>
            <BeansMain data={filteredAndSearchedData} />
          </Route>
          <Route path='/pleasure'>
            <PleasureMain data={DATA} />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};
export default App;
