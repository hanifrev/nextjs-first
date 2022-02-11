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
        <p style={content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </details>
      <details style={styles}>
        <summary>burn the winter landmark</summary>
        <p style={content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </details>
    </div>
  );
};

export default HTMLAccordion;
