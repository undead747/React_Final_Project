import './App.css';
import { BrowserRouter as Router , Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ShopConnector } from './shop/ShopConnector';
import { SportsStoreDataStore } from './data/DataStore';

function App() {
  return (
    <Provider store={SportsStoreDataStore}>
      <Router>
          <Switch>
              <Route path={'/shop'} component={ShopConnector} />
              <Redirect to={'/shop'} />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
