import React from "react";
import SearchParams from "../../src/component/SearchParams";

const styles = {
  display: "flex",
  flexDirection: "column",
  lineHeight: "1rem",
};

const Intro = () => {
  return (
    <div style={styles}>
      <h1>complete intro react v6, btholt</h1>
      <h3>Hooks</h3>
      <h4>{">"}useState</h4>
      <div>
        <li>-Use hooks if you have data updated frequently (or not)</li>
        <li>-Never ever put hooks inside of conditional statement</li>
      </div>
      <br />
      <SearchParams />
      <h4>{">"}useEffect</h4>
      <hr />
    </div>
  );
};

export default Intro;
