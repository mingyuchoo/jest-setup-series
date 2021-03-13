import React, { ReactElement, useState } from 'react';

// import Button from './Button';

const Counter: React.FC = (): ReactElement => {
  const [counter, setCounter] = useState(0);
  const delayedPlus = () => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 2000);
  };
  return (
    <>
      <button data-testid="plus" onClick={delayedPlus}>
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
