import React, { useState } from "react";
import Match from "./Match";

const StateExample = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [result, setResult] = useState([
    {
      text: "Exceter City FC",
      isWin: true
    },
    {
      text: "Forest Green FC",
      isWin: false
    },
    {
      text: "FC United of Manchester",
      isWin: true
    },
  ])

  const [value, setValue] = useState("")

  return (
    <div>
      <h2
        onClick={() => setIsClicked(!isClicked)}
        style={{ color: isClicked ? "limegreen" : "#1900ff" }}
      >
        UNDER THE WEEPING MOON
      </h2>
      <hr />

      <div>
        <h3>Barrow AFC matches</h3>
        {result.map((match, index) => {
          return (
            <Match  key={index} index={index} match={match} />
          )
        })}
      </div>

    </div>
  );
};
export default StateExample;
