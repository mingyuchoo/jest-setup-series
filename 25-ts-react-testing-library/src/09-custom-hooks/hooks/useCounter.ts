import { useState } from 'react';

// custom Hook
export interface IUseCounter {
  counter: number;
  increase: () => void;
  decrease: () => void;
}

const useCounter = (): IUseCounter => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  return { counter, increase, decrease };
};

export default useCounter;
