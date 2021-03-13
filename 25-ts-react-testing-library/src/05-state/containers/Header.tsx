import React from 'react';

import Button from '../components/Button';

function Header(): React.ReactElement {
  return (
    <header>
      <h1>This is Header</h1>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        Github
      </a>
      <Button text="go" />
    </header>
  );
}

export default Header;
