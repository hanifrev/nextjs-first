import React, { useEffect, useState } from "react";

const Evo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>project revolutions</h4>
      <p>Number {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count * 0)}>reset</button>
    </div>
  );
};

export default Evo;
