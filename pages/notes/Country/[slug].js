import React from "react";

const Detail = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>
        <h1>{data.name.common}</h1>
      </div>
      <div>Official Name: {data.name.official}</div>
      <div>Capital: {data.capital[0]}</div>
      <div>Population: {data.population}</div>
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
