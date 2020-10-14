import * as types from "constants/actionTypes";

function todo(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      const { description, dueDate, id, startDate } = action.payload;

      return Object.assign({}, state, {
        [id]: { description, dueDate, startDate, status: 1, id },
        ids: [...state.ids, id],
        nextId: id + 1,
      });

    case types.UPDATE_TODO:
      const {
        description: desc,
        dueDate: due,
        id: myId,
        newStatus,
      } = action.payload;

      return Object.assign({}, state, {
        [myId]: {
          ...state[myId],
          status: newStatus,
          description: desc,
          dueDate: due,
        },
      });

    case types.DELETE_TODO:
      const { todoId } = action.payload;
      const newIds = state.ids.filter((id) => id !== todoId);

      return Object.assign({}, state, { [todoId]: null, ids: newIds });

    case types.CHANGE_STATUS:
      const { todoId: tId, newList: nList } = action.payload;

      return Object.assign({}, state, {
        [tId]: {
          ...state[tId],
          status: nList,
        },
      });

    default:
      return state;
  }
}

const initialState = {
  ids: [],
  nextId: 1,
};

export default todo;
