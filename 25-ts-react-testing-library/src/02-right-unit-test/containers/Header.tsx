import React from 'react';

/*******************************************
 * Try changing `<header>` and `Github` belows.
 ********************************************/
function Header(): React.ReactElement {
  return (
    <header>
      <h1>This is Header</h1>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        Github
      </a>
    </header>
  );
}

export default Header;
