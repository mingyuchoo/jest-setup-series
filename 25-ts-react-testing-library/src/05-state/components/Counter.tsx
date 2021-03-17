import React, { ReactElement, useState } from 'react';

const Counter: React.FC = (): ReactElement => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button data-testid="plus" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button data-testid="minus" onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <label data-testid="result">{counter}</label>
    </>
  );
};

export default Counter;
