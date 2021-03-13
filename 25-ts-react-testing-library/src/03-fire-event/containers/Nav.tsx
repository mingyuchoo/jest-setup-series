import React, { ReactElement, useState } from 'react';

export default function Nav(): ReactElement {
  const [keyword, setKeyword] = useState('');
  return (
    <nav>
      <input
        name="keyword"
        type="text"
        placeholder="Enter keyword"
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
        value={keyword}
      />
      <button
        name="search"
        type="button"
        onClick={() => {
          console.log(`send keyword: "${keyword}" to server`);
          setKeyword('');
        }}
      >
        Search
      </button>
      <p>{keyword || 'Search something.'}</p>
    </nav>
  );
}
