import React from "react";
import Link from "next/link";

const index = ({ avatars }) => {
  return (
    <div>
      {avatars.map((x) => {
        return (
          <Link
            href={`Avatars/characters/${x.name
              .toLowerCase()
              .replace(/ /g, "-")}`}
          >
            <a>
              <h3 style={{ color: "#000" }}>{x.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const avatars = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters/avatar"
  ).then((r) => r.json());

  // console.log(avatars);

  return {
    props: {
      avatars,
    },
  };
}
