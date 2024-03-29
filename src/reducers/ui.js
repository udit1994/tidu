import * as types from "constants/actionTypes";

function ui(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_TODO:
      const { todoId } = action.payload;

      return { ...state, selectedTodo: todoId };

    case types.DESELECT_TODO:
      return { ...state, selectedTodo: null };

    default:
      return state;
  }
}

const initialState = {};

export default ui;
