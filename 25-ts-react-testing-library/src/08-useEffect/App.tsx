import React, { ReactElement } from 'react';

import List from './components/List';

function App(): ReactElement {
  const title = 'React Testing Library';
  return (
    <div className="App">
      <h1>{title}</h1>
      <List />
    </div>
  );
}

export default App;
