import React from "react";

function cl() {
  const key = Math.random() * 100;
  return function inner() {
    console.log(key);
  };
}

const f = cl();

//  /////////////////////////////////LINEBREAK\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function cl2() {
  function multiply(num) {
    return num * 5;
  }
  return multiply;
}

const generate = cl2();
const result = console.log(generate(104));
const result2 = generate(2065);

//  /////////////////////////////////LINEBREAK\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const Pages = () => {
  return (
    <div>
      <h1>CLOSURE</h1>
      <button onClick={f}>Closure test</button>
      {/* <button onClick={result}>Closure test 2</button> */}
      <p>{result2}</p>
    </div>
  );
};

export default Pages;
