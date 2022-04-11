import React from "react";

const zuko = ({ character }) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.photoUrl} />
      <p>{character.affiliation}</p>
    </div>
  );
};

export default zuko;

export async function getStaticProps({ params }) {
  const results = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${params.characterId.replace(
      /\-/g,
      "+"
    )}`
  ).then((r) => r.json());

  //   console.log(results);

  return {
    props: {
      character: results[0],
    },
  };
}

export async function getStaticPaths() {
  const characters = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500"
  ).then((r) => r.json());
  return {
    paths: characters.map((x) => {
      const characterId = x.name
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/\'/, "")
        .replace(/\(.+\)/, "");
      return {
        params: {
          characterId,
        },
      };
    }),
    fallback: false,
  };
}
