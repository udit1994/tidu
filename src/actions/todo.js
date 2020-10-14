import * as types from "constants/actionTypes";

export const addTodo = (id, description, dueDate, startDate) => ({
  type: types.ADD_TODO,
  payload: { description, dueDate, id, startDate },
});

export const changeStatus = (newList, todoId, listId) => ({
  type: types.CHANGE_STATUS,
  payload: { listId, newList, todoId },
});

export const deleteTodo = (todoId, status) => ({
  type: types.DELETE_TODO,
  payload: { status, todoId },
});

export const deSelectTodo = () => ({
  type: types.DESELECT_TODO,
});

export const selectTodo = (todoId) => ({
  type: types.SELECT_TODO,
  payload: { todoId },
});

export const updateTodo = (id, description, dueDate, newStatus, status) => ({
  type: types.UPDATE_TODO,
  payload: {
    status,
    description,
    dueDate,
    id,
    newStatus,
  },
});
