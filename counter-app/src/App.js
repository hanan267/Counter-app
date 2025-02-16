import React, { useState } from 'react';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <h1 className="title">Counter App</h1>
      <h2 className="counter-display">{count}</h2>

      <div className="button-group">
        <button className="button increment" onClick={increment}>+</button>
        <button className="button decrement" onClick={decrement} disabled={count === 0}>-</button>
        <button className="button reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
