import react, { useState, useEffect } from "react";

const EffectExample = () => {
  const album = [
    "Orchid",
    "Morningrise",
    "My Arm, Your Hearse",
    "Still Life",
    "Blackwater Park",
    "Deliverence",
    "Damnation",
    "Ghost Reveries",
    "Watershed",
    "Heritage",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (text) localStorage.setItem("edit=text", text);
  });

  useEffect(() => {
    setText(localStorage.getItem("edit-text"));
  }, []);

  return (
    <div>
      <textarea
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h4>
        Album: {index + 1}. {album[index]}
      </h4>
      <button onClick={() => setIndex(index - 1)}>-</button>
      <button onClick={() => setIndex(index + 1)}>+</button>
    </div>
  );
};

export default EffectExample;
