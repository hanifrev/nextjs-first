import gsap from "gsap";
import React, { useState, useRef, useEffect } from "react";
import data from "./TabsSection.json";

const TabsSection = () => {
  const [active, setActive] = useState(0);

  const theRef = useRef();
  const x = gsap.utils.selector(theRef);

  useEffect(() => {
    gsap.from(x(".cont"), { y: 200, duration: 1, ease: "bounce.out" });
  });

  const container = {
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
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
    <div style={{ container }} ref={theRef}>
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
      <div className="cont">
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
