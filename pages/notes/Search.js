import React, { useState } from "react";
import data from "./MOCK_DATA.json";

const Search = () => {
  const [searchTerm, setSeacrhTerm] = useState("");
  const styles = {
    background: "#9daf9a",
    width: "300px",
    borderRadius: "20px",
    paddingLeft: "1rem",
  };
  const inputStyle = {
    padding: "10px",
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter the name ..."
        onChange={(e) => {
          setSeacrhTerm(e.target.value);
        }}
        style={inputStyle}
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
            <div key={key} style={styles}>
              <p>{x.first_name}</p>
              <p>Email: {x.email}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Search;
