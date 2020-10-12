import * as types from "constants/actionTypes";

const initialState = {
  ids: [],
  nextId: 1,
};

function card(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      const { description, dueDate, id, startDate } = action.payload;

      return Object.assign({}, state, {
        [id]: { description, dueDate, startDate, belongsTo: 1, id },
        ids: [...state.ids, id],
        nextId: id + 1,
      });

    case types.UPDATE_TODO:
      const {
        description: desc,
        dueDate: due,
        id: myId,
        newBelongsTo,
      } = action.payload;

      return Object.assign({}, state, {
        [myId]: {
          ...state[myId],
          belongsTo: newBelongsTo,
          description: desc,
          dueDate: due,
        },
      });

    case types.DELETE_TODO:
      const { cardId } = action.payload;
      const newIds = state.ids.filter((id) => id !== cardId);

      return Object.assign({}, state, { [cardId]: null, ids: newIds });

    case types.CHANGE_STATUS:
      const { cardId: cId, newList: nList } = action.payload;

      return Object.assign({}, state, {
        [cId]: {
          ...state[cId],
          belongsTo: nList,
        },
      });

    default:
      return state;
  }
}

export default card;
