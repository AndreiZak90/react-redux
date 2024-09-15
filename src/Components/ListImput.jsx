import { useSelector, useDispatch } from "react-redux";
import { DELETE_ITEM } from "../Redux/actions";

// eslint-disable-next-line react/prop-types
export default function ListImput({ filtr }) {
  const list = useSelector((state) => state.filteredItems);
  const dispatch = useDispatch();

  const clickEdit = (id) => {
    const item = list[id];
    filtr(item);
  };

  const delItem = (id) => {
    const item = list[id].nameActions;
    dispatch({ type: DELETE_ITEM, payload: { deleteItem: item } });
  };

  return (
    <div className="listItems">
      {list.map((item, id) => (
        <div className="item" key={id}>
          <div className="box_left">
            <p className="item_name">{item.nameActions}</p>
            <p className="item_value">{item.valueActions}</p>
          </div>
          <div className="box_rigth">
            <button onClick={() => clickEdit(id)} className="item_edit">
              Редактировать
            </button>
            <button onClick={() => delItem(id)} className="item_delete">
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
