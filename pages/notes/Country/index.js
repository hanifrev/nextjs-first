import React from "react";

const index = ({ country }) => {
  return (
    <div>
      {country.map((x, index) => {
        return <div>{x.name.common}</div>;
      })}
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const country = await fetch(`https://restcountries.com/v3.1/all`).then(
    (res) => res.json()
  );

  return {
    props: {
      country,
    },
  };
}
