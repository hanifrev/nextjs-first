import React from "react";

const index = ({ avatars }) => {
  return (
    <div>
      {avatars.map((x) => {
        return <h3>{x.name}</h3>;
      })}
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const avatars = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters/avatar"
  ).then((r) => r.json());

  console.log(avatars);

  return {
    props: {
      avatars,
    },
  };
}
