import React, { useState } from "react";
import Link from "next/link";

const index = ({ country }) => {
  const [search, setSearch] = useState("");

  const list = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "4rem",
    paddingTop: "1rem",
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search Here"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div style={list}>
        {country
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.name.common.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((x, index) => {
            return (
              <Link href={`/notes/Country/${x.name.common}`}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "11rem",
                    cursor: "pointer",
                  }}
                >
                  <img style={{ width: "150px" }} src={x.flags.svg}></img>
                  {x.name.common}
                </div>
              </Link>
            );
          })}
      </div>
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
