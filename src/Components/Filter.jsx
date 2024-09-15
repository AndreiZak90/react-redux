import { useDispatch } from "react-redux";
import { CLEAR_FILTERS, FILTER_ITEMS } from "../Redux/actions";

export default function Filter() {
  const dispatch = useDispatch();
  const onInput = (e) => {
    dispatch({ type: CLEAR_FILTERS });
    dispatch({ type: FILTER_ITEMS, payload: { filterValue: e.target.value } });
  };
  return (
    <form className="box_filter">
      <p className="text_filter">Фильтр</p>
      <input
        type="text"
        name="filter"
        onChange={(e) => e.target.value}
        onInput={onInput}
        className="filter_input"
      />
    </form>
  );
}
