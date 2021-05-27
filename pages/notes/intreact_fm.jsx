import React, { useState, useEffect } from "react";
import StateExample from "../../src/component/StateExample";
import EffectExample from "../../src/component/EffectExample";

const IntReact = () => {
  const [theState, setTheState] = useState();
  const [counter, setCounter] = useState(0);
  const [imgX, setImgX] = useState(true);

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



  useEffect(()=> {
    const interval = setInterval(() => {
      setImgX(!imgX)
    }, 1000)
    return () => clearInterval(interval)
  }, [imgX])

  return (
    <div>
      test
      <StateExample />
      <hr />
      <EffectExample />
      <hr />
      <button onClick={() => setTheState(alertTest)}>BTN</button>
      <br></br>
      <button onClick={ctn}>{counter}</button>
      <button onClick={reset}>reset</button>
      <p>{counter}</p>
      <img alt='' src={imgX ? 'https://i.imgur.com/54nCqZJ.jpg' : 'https://i.imgur.com/QPhQ2Su.jpg'} />
    </div>
  );
};

export default IntReact;
