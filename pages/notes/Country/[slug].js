import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Detail = ({ data }) => {
  const box = useRef();
  const x = gsap.utils.selector(box);

  useEffect(() => {
    gsap.fromTo(x(".cont"), { y: 400, x: 200 }, { y: 50, x: 0 });
  });

  console.log(data);
  return (
    <div ref={box}>
      <div className="cont">
        <div className="nameNation">
          <h1>{data.name.common}</h1>
        </div>
        <div>Official Name: {data.name.official}</div>
        <div>Capital: {data.capital[0]}</div>
        <div>Population: {data.population}</div>
      </div>
    </div>
  );
};

export default Detail;

export async function getServerSideProps({ params }) {
  console.log(params);
  const country = await fetch(
    `https://restcountries.com/v3.1/name/${params.slug}?fullText=true`
  );
  const res = await country.json();
  const data = res[0];

  return {
    props: {
      data,
    },
  };
}
