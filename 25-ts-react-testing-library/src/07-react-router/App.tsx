import React, { ReactElement } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import LocationDisplay from './components/LocationDisplay';
import NoMatch from './components/NoMatch';

function App(): ReactElement {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
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
