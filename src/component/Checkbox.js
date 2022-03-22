import React from "react";

const Checkbox = ({ label, id }) => {
  return (
    <div>
      <label>
        <input type="checkbox" value={id} />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
