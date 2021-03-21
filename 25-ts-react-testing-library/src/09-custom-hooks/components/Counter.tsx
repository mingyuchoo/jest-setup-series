import React, { ReactElement } from 'react';

import useCounter from '../hooks/useCounter';

const Counter: React.FC = (): ReactElement => {
  const { counter, increase, decrease } = useCounter();
  return (
    <>
      <button data-testid="plus" onClick={() => increase()}>
        +
      </button>
      <button data-testid="minus" onClick={() => decrease()}>
        -
      </button>
      <label data-testid="result">{counter}</label>
    </>
  );
};

export default Counter;
