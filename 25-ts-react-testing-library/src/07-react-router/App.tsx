import React, { ReactElement } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Detail from './components/Detail';
import Home from './components/Home';
import List from './components/List';
import LocationDisplay from './components/LocationDisplay';
import NoMatch from './components/NoMatch';

function App(): ReactElement {
  return (
    <div>
      <Link to="/">Home</Link> <Link to="/list">List</Link> <Link to="/list/detail">Detail</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list">
          <List />
        </Route>
        <Route exact path="/list/:slug">
          <Detail />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <LocationDisplay />
    </div>
  );
}

export default App;
