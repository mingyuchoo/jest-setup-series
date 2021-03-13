import React, { ReactElement } from 'react';

import Header from './containers/Header';
import Nav from './containers/Nav';

function App(): ReactElement {
  const title = 'React Testing Library';
  return (
    <div className="App">
      <h1>{title}</h1>
      <Header />
      <Nav />
    </div>
  );
}

export default App;
