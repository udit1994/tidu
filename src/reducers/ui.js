import * as types from "constants/actionTypes";

const initialState = {};

function card(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_TODO:
      const { id } = action.payload;
      return { ...state, selectedCard: id };
    case types.UNSELECT_TODO:
      return { ...state, selectedCard: null };
    default:
      return state;
  }
}

export default card;
