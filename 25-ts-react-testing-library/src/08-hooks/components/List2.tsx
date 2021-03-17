import React, { ReactElement, useEffect, useState } from 'react';

import loadFromApi from '../api/api';

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
