import React, { ReactElement } from 'react';

import Header from './layout/Header';
import Nav from './layout/Nav';

function App(): ReactElement {
  const title = 'React Testing Library';
  return (
    <div className="App">
      <Header />
      <Nav />
    </div>
  );
}

export default App;
