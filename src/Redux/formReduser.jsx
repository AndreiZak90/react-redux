import {
  ADD_FORM,
  CLEAR_FILTERS,
  DELETE_ITEM,
  FILTER_ITEMS,
  EDIT_ITEM,
} from "./actions";
import { createStore } from "redux";

const initialState = {
  list: [
    // {
    //   nameActions: "",
    //   valueActions: 0,
    //   idx: id
    // },
  ],
  filteredItems: [],
};

const formReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM:
      return {
        ...state,
        list: [...state.list, action.payload],
        filteredItems: [...state.list, action.payload],
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filteredItems: state.list,
      };
    case FILTER_ITEMS:
      return {
        ...state,
        filteredItems: state.list.filter((el) =>
          el.nameActions.startsWith(action.payload.filterValue)
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter(
          (e) => e.nameActions !== action.payload.deleteItem
        ),
        filteredItems: state.list.filter(
          (e) => e.nameActions !== action.payload.deleteItem
        ),
      };
    case EDIT_ITEM:
      return {
        ...state,
        list: state.list.map((item) =>
          item.idx === action.payload.idxOld
            ? {
                ...action.payload,
              }
            : { ...item }
        ),
        filteredItems: state.filteredItems.map((item) =>
          item.idx === action.payload.idxOld
            ? {
                ...action.payload,
              }
            : { ...item }
        ),
      };
    default:
      return state;
  }
};

const reducer = createStore(formReduser);

export default reducer;
