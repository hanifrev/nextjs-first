import React, { useState } from "react";

const IntReact = () => {
  const [theState, setTheState] = useState();
  const [counter, setCounter] = useState(0);

  const alertTest = () => {
    // alert("wewewwewe");
    console.log("test test test");
  };

  const ctn = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(counter * 0);
  };

  return (
    <div>
      test
      <button onClick={() => setTheState(alertTest)}>BTN</button>
      <br></br>
      <button onClick={ctn}>{counter}</button>
      <button onClick={reset}>reset</button>
      <p>{counter}</p>
    </div>
  );
};

export default IntReact;
