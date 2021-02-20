import React from "react";

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/");
  const data = await res.json();

  return {
    props: {},
  };
}
