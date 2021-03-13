import React, { ReactElement } from 'react';

import Header from './containers/Header';

function App(): ReactElement {
  const title = 'React Testing Library';
  return (
    <div className="App">
      <h1>{title}</h1>
      <Header />
    </div>
  );
}

export default App;
