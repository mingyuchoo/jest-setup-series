import React, { ReactElement } from 'react';

import Header from './layout/Header';
import Nav from './layout/Nav';
import Section from './layout/Section';

function App(): ReactElement {
  const title = 'React Testing Library';
  return (
    <div className="App">
      <h1>{title}</h1>
      <Header />
      <Nav />
      <Section />
    </div>
  );
}

export default App;
