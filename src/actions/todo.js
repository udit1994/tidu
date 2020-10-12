import * as types from "constants/actionTypes";

export const addTodo = (id, description, dueDate, startDate) => ({
  type: types.ADD_TODO,
  payload: { description, dueDate, id, startDate },
});

export const deleteTodo = (cardId, listId) => ({
  type: types.DELETE_TODO,
  payload: { cardId, listId },
});

export const updateTodo = (
  id,
  description,
  dueDate,
  newBelongsTo,
  belongsTo
) => ({
  type: types.UPDATE_TODO,
  payload: {
    description,
    dueDate,
    id,
    newBelongsTo,
    belongsTo,
  },
});

export const selectTodo = (cardId) => ({
  type: types.SELECT_TODO,
  payload: { id: cardId },
});

export const deselectTodo = (cardId) => ({
  type: types.UNSELECT_TODO,
  payload: { cardId },
});

export const changeStatus = (newList, cardId, listId) => ({
  type: types.CHANGE_STATUS,
  payload: { newList, cardId, listId },
});