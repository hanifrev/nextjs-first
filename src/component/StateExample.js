import React, { useState } from "react";

const StateExample = () => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div>
      <h2
        onClick={() => setIsClicked(!isClicked)}
        style={{ color: isClicked ? "limegreen" : "#1900ff" }}
      >
        UNDER THE WEEPING MOON
      </h2>
    </div>
  );
};
export default StateExample;
