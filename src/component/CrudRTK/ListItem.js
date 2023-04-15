import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../features/crud/crudSlice";

const ListItem = () => {
  const listItem = useSelector((state) => state.crud);
  const dispatch = useDispatch();

  console.log(listItem);

  return (
    <div>
      <ul>
        {listItem.map((x) => {
          return (
            <li>
              {x.items}
              <button onClick={() => dispatch(removeItem(x.id))}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListItem;
