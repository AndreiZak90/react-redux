import ListImput from "./ListImput";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_FORM } from "../Redux/actions";
import Filter from "./Filter";

export default function Form() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [states, setStates] = useState();
  const dispatch = useDispatch();

  const addForm = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_FORM,
      payload: {
        nameActions: text,
        valueActions: number,
      },
    });
    setText("");
    setNumber("");
  };

  const editForm = (elem) => {
    setStates(elem);
    if (states != undefined) {
      setText(elem.nameActions);
      setNumber(elem.valueActions);
    } else return;
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
