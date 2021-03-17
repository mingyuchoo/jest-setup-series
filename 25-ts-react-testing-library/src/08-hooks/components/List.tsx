import React, { ReactElement, useEffect, useState } from 'react';

function List(): ReactElement {
  const [data, setData] = useState<number>();
  const getData = (): Promise<any> => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
  };
  useEffect(() => {
    const func = async () => {
      const data = await getData();
      const value = await data.json();
      setData(value.title);
    };
    func();
  }, []);

  return (
    <div>
      <pre data-testid="test">{data}</pre>
    </div>
  );
}

export default List;
