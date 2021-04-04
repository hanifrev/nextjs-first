import React, { useEffect, useState } from "react";
import Link from "next/link";

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
      <h2>js the hard parts v2</h2>
      <p>Number {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count * 0)}>reset</button>
      <hr />

      <h3>Closure</h3>
      <Link href="/notes/closure">
        <a>Go to closure page</a>
      </Link>
      <hr />

      <h3>Asynchronous</h3>
      <hr />

      <h3>OOP</h3>
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
