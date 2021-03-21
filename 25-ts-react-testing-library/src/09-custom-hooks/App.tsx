import React, { ReactElement } from 'react';

import Section from './containers/Section';

function App(): ReactElement {
  const title = 'React Testing Library';
  return (
    <div className="App">
      <h1>{title}</h1>
      <Section />
    </div>
  );
}

export default App;
