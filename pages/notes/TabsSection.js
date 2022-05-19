import React, { useState } from "react";
import data from "./TabsSection.json";

const TabsSection = () => {
  const [active, setActive] = useState(0);

  const container = {
    display: "flex",
    flexDirection: "column",
  };

  const fontColor = {
    active: {
      color: "red",
    },
    inactive: {
      color: "black",
    },
  };
  return (
    <div style={{ container }}>
      <div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              style={active === index ? fontColor.active : fontColor.inactive}
              onClick={() => setActive(index)}
            >
              <button
                style={active === index ? fontColor.active : fontColor.inactive}
              >
                {item.title}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <div>{data[active].title}</div>
        <div>{data[active].description}</div>
        <div>
          <img src={data[active].images} />
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
