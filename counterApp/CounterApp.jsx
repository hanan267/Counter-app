import React, { useState } from 'react';
import './CounterApp.css'; // Import the CSS file

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="title">🌟 Counter App 🌟</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="button-group">
        <button className="button increment" onClick={increment}>
          Increment
        </button>
        <button
          className={`button decrement ${count === 0 ? 'disabled' : ''}`}
          onClick={decrement}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button className="button reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
