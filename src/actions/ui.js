import * as types from "constants/actionTypes";

export const toggleSidebar = () => ({
  type: types.TOGGLE_SIDEBAR,
});

export const addList = () => ({
  type: types.ADD_LIST,
});

export const removeList = () => ({
  type: types.REMOVE_LIST,
});
