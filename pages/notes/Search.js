import React, { useState } from "react";
import data from "./MOCK_DATA.json";

const Search = () => {
  const [searchTerm, setSeacrhTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="enter the name"
        onChange={(e) => {
          setSeacrhTerm(e.target.value);
        }}
      />
      {data
        .filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((x, key) => {
          return (
            <div key={key}>
              <p>{x.first_name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Search;
