import React from "react";

const Items = ({ data }) => {
  return (
    <div>
      {data.map((value) => {
        // const { id, image, title, description } = value;
        return (
          <div key={value.id}>
            <div>
              <img src={value.image} />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
