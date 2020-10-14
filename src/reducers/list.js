import * as types from "constants/actionTypes";

function list(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_TITLE:
      const { id, title } = action.payload;

      return {
        ...state,
        [id]: {
          ...state[id],
          title,
        },
      };

    case types.ADD_TODO:
      const { id: todoId } = action.payload;

      return {
        ...state,
        1: { ...state[1], todos: [...state[1].todos, todoId] },
      };

    case types.UPDATE_TODO:
      const { id: myId, newStatus, status } = action.payload;

      if (status === newStatus) {
        return { ...state };
      }

      const removeFromList = state[status].todos.filter((id) => id !== myId);

      return {
        ...state,
        [status]: { ...state[status], todos: removeFromList },
        [newStatus]: {
          ...state[newStatus],
          todos: [...state[newStatus].todos, myId],
        },
      };

    case types.DELETE_TODO:
      const { todoId: deletedTodo, status: st } = action.payload;

      const newListIds = state[st].todos.filter((id) => id !== deletedTodo);

      return {
        ...state,
        [st]: { ...state[st], todos: newListIds },
      };

    case types.CHANGE_STATUS:
      const { todoId: tId, listId: oldlId, newList } = action.payload;

      if (oldlId === newList) {
        return { ...state };
      }

      return Object.assign({}, state, {
        [oldlId]: {
          ...state[oldlId],
          todos: state[oldlId].todos.filter((todoId) => todoId !== tId),
        },
        [newList]: {
          ...state[newList],
          todos: [...state[newList].todos, tId],
        },
      });

    default:
      return state;
  }
}

const initialState = {
  1: {
    id: 1,
    title: "To do",
    todos: [],
  },
  2: {
    id: 2,
    title: "Let's begin",
    todos: [],
  },
  3: {
    id: 3,
    title: "In Progress",
    todos: [],
  },
  4: {
    id: 4,
    title: "Finish",
    todos: [],
  },
  ids: [1, 2, 3, 4],
};

export default list;
