import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../features/crud/crudSlice";
import { useState } from "react";

const ListItem = () => {
  const listItem = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [theId, setTheId] = useState("");

  const saveEdit = () => {
    const payload = {
      id: theId,
      items: editValue,
    };
    dispatch(updateItem(payload));
    cancelEdit();
  };

  // console.log(theId);
  const cancelEdit = () => {
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={saveEdit}>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button type="submit">save</button>
          <button onClick={cancelEdit}>cancel</button>
        </form>
      ) : (
        <ul>
          {listItem.map((x) => {
            return (
              <li>
                {x.items}
                <button
                  onClick={() =>
                    setIsEdit(!isEdit) ||
                    setTheId(x.id) ||
                    setEditValue(x.items)
                  }
                >
                  edit
                </button>
                <button onClick={() => dispatch(removeItem(x.id))}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ListItem;
