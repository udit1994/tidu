import * as types from "constants/actionTypes";

const initialState = {
  1: {
    id: 1,
    title: "To do",
    cards: [],
  },
  2: {
    id: 2,
    title: "Let's begin",
    cards: [],
  },
  3: {
    id: 3,
    title: "In Progress",
    cards: [],
  },
  4: {
    id: 4,
    title: "Finish",
    cards: [],
  },
  ids: [1, 2, 3, 4],
};

function list(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_TITLE:
      const { id, title } = action.payload;

      return Object.assign({}, state, Object.assign({}, state[id], { title }));
    case types.ADD_TODO:
      const { id: cardId } = action.payload;

      return {
        ...state,
        1: { ...state[1], cards: [...state[1].cards, cardId] },
      };
    case types.UPDATE_TODO:
      const {
        id: myId,
        list: newListId,
        prevList: prevListId,
      } = action.payload;

      if (prevListId === newListId) {
        return { ...state };
      }

      const removeFromList = state[prevListId].cards.filter(
        (id) => id !== myId
      );

      return {
        ...state,
        [prevListId]: { ...state[prevListId], cards: removeFromList },
        [newListId]: {
          ...state[newListId],
          cards: [...state[newListId].cards, myId],
        },
      };
    case types.DELETE_TODO:
      const { cardId: todoId, listId } = action.payload;

      const newListIds = state[listId].cards.filter((id) => id !== todoId);

      return {
        ...state,
        [listId]: { ...state[1], cards: newListIds },
      };
    case types.CHANGE_STATUS:
      const { cardId: cId, listId: oldlId, newList } = action.payload;

      if (oldlId === newList) {
        return { ...state };
      }

      return Object.assign({}, state, {
        [oldlId]: {
          ...state[oldlId],
          cards: state[oldlId].cards.filter((cardId) => cardId !== cId),
        },
        [newList]: {
          ...state[newList],
          cards: [...state[newList].cards, cId],
        },
      });
    default:
      return state;
  }
}

export default list;