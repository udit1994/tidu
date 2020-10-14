import { createSelector } from "reselect";

export const todoIdSelector = createSelector(
  (state) => state.todo.nextId,
  (id) => id
);

export const todoInfoSelector = createSelector(
  (state) => state.todo[state.ui.selectedTodo],
  (todo) => todo
);

export const todoSelector = createSelector(
  (state) => state.todo,
  (data) => data
);
