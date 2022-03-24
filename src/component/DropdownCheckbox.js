import React, { useState } from "react";

function CheckboxExample() {
  const id = "department";
  const [items, setItems] = useState([
    { id: 0, text: "Standby", checked: false },
    { id: 1, text: "Learn React", checked: false },
    { id: 2, text: "Play around in JSFiddle", checked: false },
    { id: 3, text: "Build something awesome", checked: false },
  ]);

  const [tempItems, setTempItems] = useState(items);

  const toggleDropdown = (id) => {
    let list = document.querySelector(`#${id} .dropdown-list`);
    if (list) {
      list.classList.toggle("is-showing");
    }
  };

  const toggleItem = (item) => {
    let newItems = JSON.parse(JSON.stringify(items));
    newItems.map((newItem) => {
      if (newItem.id === item.id) {
        newItem.checked = !item.checked;
        newItem = item;
      }
    });
    setItems(newItems);
  };

  const applyFilter = () => {
    // set ke tempItems buat persiapan kalo dicancel
    setTempItems(items);
    toggleDropdown(id);
  };

  const cancel = () => {
    // reset changes, dibalikin lg ke state awal sebelum dirubah
    setItems(tempItems);
    toggleDropdown(id);
  };

  return (
    <div id="dropdown-check">
      <div className="dropdown" id={id}>
        <div className="dropdown-header" onClick={() => toggleDropdown(id)}>
          <span>Department</span>
          <span>^</span>
        </div>

        <div className="dropdown-list">
          <ul>
            {items &&
              items.map((item, index) => (
                <li onClick={() => toggleItem(item)} key={index}>
                  <label htmlFor={item.text}>{item.text}</label>
                  <input
                    type="checkbox"
                    name={item.text}
                    checked={item.checked}
                    readOnly={true}
                  />
                </li>
              ))}

            <li className="dropdown-footer">
              <button onClick={() => cancel()}>cancel</button>
              <button onClick={() => applyFilter()}>Apply</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CheckboxExample;
