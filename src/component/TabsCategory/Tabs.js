import React from "react";

const Tabs = ({ filtercategory, tabsData }) => {
  return (
    <>
      <div>
        {tabsData.map((category, index) => {
          return (
            <button
              type="button"
              onClick={() => filtercategory(category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
