import React from "react";

function Ivy() {
  // console.log("test");
  return (
    <ul>
      <div>test</div>
    </ul>
  );
}

export default Ivy;

export function getStaticPaths() {
  console.log(context);

  return {
    props: {},
  };
}
