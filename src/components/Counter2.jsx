import { useState } from 'react';

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Functional-Counter</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>Count</button>
    </div>
  );
};
export default Counter2;
