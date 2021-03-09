import React, { ReactElement } from 'react';

import Header from './layout/Header';

function App(): ReactElement {
  const title = 'React Testing Library';
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
