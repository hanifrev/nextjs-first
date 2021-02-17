import React, { useEffect, useState } from "react";

const Evo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const [nation, setNation] = useState();

  useEffect(() => {
    const user1 = {
      name: "Scott Fergie",
      natioality: "Scotland",
      score: 9,
    };

    setName(user1.name);
    setNation(user1.natioality);
  });

  return (
    <div>
      <h4>project revolutions</h4>
      <p>Number {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count * 0)}>reset</button>

      <h2>OOP</h2>
      <p>Name: {name}</p>
      <p>Nationality: {nation}</p>

      <form>
        <label>Name:</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default Evo;
