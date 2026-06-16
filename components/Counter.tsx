import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section id="counter" className="card">
      <h2>Counter Component</h2>
      <p>This component uses state to update the count.</p>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      {count > 0 && <p>The count is positive.</p>}
      {count < 0 && <p>The count is negative.</p>}
      {count === 0 && <p>The count is zero.</p>}
    </section>
  );
};

export default Counter;