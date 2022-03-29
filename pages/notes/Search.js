import React, { useState } from "react";
import data from "./MOCK_DATA.json";

const Search = () => {
  const [searchTerm, setSeacrhTerm] = useState("");
  const [gen, setGen] = useState("");
  const [theData, setTheData] = useState(data);

  const styles = {
    background: "#9daf9a",
    width: "300px",
    borderRadius: "20px",
    paddingLeft: "1rem",
  };
  const inputStyle = {
    padding: "10px",
  };

  const gender = ["all", ...new Set(data.map((x) => x.gender))];
  //   console.log(gender);
  const filterCategory = (x) => {
    if (x == "all") {
      setTheData(data);
    }
    const filteredData = data.filter((x) => {
      return x.gender == x;
    });
    setTheData(filteredData);
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
      {/* <h4>{gen}</h4> */}
      <div style={{ display: "flex" }}>
        <p>gender:</p>
        <select value={gen} onChange={(e) => setGen(e.target.value)}>
          <option></option>
          {gender.map((x) => {
            return <option>{x}</option>;
          })}
        </select>
      </div>
      <div>
        {gender.map((x, index) => {
          return (
            <button type="button" key={index} onClick={() => setGen(x)}>
              {x}
            </button>
          );
        })}
      </div>

      {/* filter by gender */}
      {data
        .filter((val) => {
          if (gen == "") {
            return val;
          } else if (val.gender === gen) {
            return val;
          } else if (gen == "all") {
            return val;
          }
          //   return val.gender === gen;
        })
        // search filter
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
              <p>{x.gender}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Search;
