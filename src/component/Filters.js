import React from "react";
import Checkbox from "./Checkbox";

const Filters = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <Checkbox
          key={category.id}
          label={category.category_name}
          id={category.id}
        />
      ))}
    </div>
  );
};

export default Filters;
