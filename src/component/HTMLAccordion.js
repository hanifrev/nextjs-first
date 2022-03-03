import React from "react";

const HTMLAccordion = () => {
  const styles = {
    width: "25rem",
    background: "#FFFFFF",
  };

  const content = {
    paddingBottom: "1rem",
    marginBottom: "0",
  };
  return (
    <div>
      <details style={styles}>
        <summary>html accordion</summary>
        <div style={content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <ul>
            <li>repsol honda</li>
            <li>yamaha factory</li>
            <li>yamaha tech 3</li>
            <li>aprilia</li>
          </ul>
        </div>
      </details>
      <details style={styles}>
        <summary>burn the winter landmark</summary>
        <div style={content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </details>
    </div>
  );
};

export default HTMLAccordion;
