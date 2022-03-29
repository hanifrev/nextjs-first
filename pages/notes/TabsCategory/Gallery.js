import React, { useState } from "react";
import Data from "./data.json";
import Tabs from "../../../src/component/TabsCategory/Tabs";
import Items from "../../../src/component/TabsCategory/Items";

const Gallery = () => {
  const [data, setData] = useState(Data);
  const categoryData = Data.map((value) => {
    return value.category;
  });

  const tabsData = ["all", ...new Set(categoryData)];

  const filterCategory = (category) => {
    if (category == "all") {
      setData(Data);
      return;
    }
    const filteredData = Data.filter((value) => {
      return value.category == category;
    });
    setData(filteredData);
  };

  return (
    <div>
      <div>
        <Tabs filtercategory={filterCategory} tabsData={tabsData} />
        <Items data={data} />
      </div>
    </div>
  );
};

export default Gallery;
