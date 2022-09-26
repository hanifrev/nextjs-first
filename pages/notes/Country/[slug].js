import React from "react";

const Detail = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>{data.name.common}</div>
      <div>{data.capital[0]}</div>
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
