import React, { ReactElement, useEffect, useState } from 'react';

// timeout=0 to simulate mocked api responses
const loadFromApi = () => new Promise((resolve) => setTimeout(resolve, 0));

function List2(): ReactElement {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFromApi();
      setLoaded(true);
    }
    void load();
  }, []);
  return loaded ? <div>Loaded</div> : <div>Loading...</div>;
}

export default List2;
