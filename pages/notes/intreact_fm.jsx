import React, { useState, useEffect } from "react";
import StateExample from "../../src/component/StateExample";
import EffectExample from "../../src/component/EffectExample";
import NewState from "../../src/component/NewState";
import EffectEx from "../../src/component/EffectEx";
import Head from 'next/head'

const IntReact = () => {

  const country = [
    {
      name: 'Germany',
      capital: 'Berlin',
      continent: 'Europe',
      objectID: 0
    },
    {
      name: 'Russia',
      capital: 'Moscow',
      continent: 'Europe/Asia',
      objectID: 0
    }
  ]

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

  const [searchT, setSearchT] = useState("");

  const handleChange = e => {
    setSearchT(e.target.value)
  }

  return (
    <div>
      <Head>
        <title>qwerty</title>
      </Head>

      <NewState />
      <hr />
      <EffectEx />
      <hr />
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
      <hr />
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" onChange={handleChange} />
      </div>
      <div>
        <h3>Output: {searchT}</h3>
      </div>
      <img style={{
        paddingTop: "5rem",
        width: "30%"
      }} alt='' src={imgX ? 'https://i.imgur.com/54nCqZJ.jpg' : 'https://i.imgur.com/QPhQ2Su.jpg'} />
    </div>
  );

      // const List = props =>
      //   props.list.map(item => (
      //     <div key={item.objectID}>
      //       <span>{item.name}</span>
      //       <span>{item.capital}</span>
      //       <span>{item.continent}</span>
      //     </div>

      //   ))

};

export default IntReact;
