import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/crud/crudSlice";

const AddNew = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addItem(text));
    setText("");
  };

  return (
    <>
      <form onSubmit={addHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add New</button>
      </form>
    </>
  );
};

export default AddNew;
