import ListImput from "./ListImput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ADD_FORM, EDIT_ITEM } from "../Redux/actions";
import Filter from "./Filter";

export default function Form() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [oldId, setOldId] = useState("");
  const [position, setPosition] = useState(true);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.filteredItems);

  const addForm = (e) => {
    e.preventDefault();
    if (text === "" || number === "") return;
    if (position === false) {
      console.log("EDIT_ITEM");
      console.log(oldId);
      console.log(list);
      dispatch({
        type: EDIT_ITEM,
        payload: {
          nameActions: text,
          valueActions: number,
          idxOld: oldId,
        },
      });
      console.log(list);
      setText("");
      setNumber("");
      setPosition(true);
      setOldId("");
    } else {
      dispatch({
        type: ADD_FORM,
        payload: {
          nameActions: text,
          valueActions: number,
          idx: Math.random(),
        },
      });
      console.log(list);
      setText("");
      setNumber("");
      setOldId("");
    }
  };

  const editForm = (idx, elem) => {
    console.log(elem);
    console.log(idx);
    setPosition(false);
    setOldId(idx);
    setText(elem.nameActions);
    setNumber(elem.valueActions);
  };

  const resetForm = () => {
    setText("");
    setNumber("");
  };
  return (
    <>
      <form className="form">
        <input
          type="text"
          name="title"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input"
        />
        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="input"
        />
        <input
          type="button"
          value="Сохранить"
          onClick={addForm}
          className="btn"
        />
        <input
          type="button"
          value="Отмена"
          onClick={resetForm}
          className="btn"
        />
      </form>
      <Filter />
      <ListImput filtr={editForm} />
    </>
  );
}
