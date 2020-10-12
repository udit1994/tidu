import * as types from "constants/actionTypes";

export const changeTitle = (id, title) => ({
  type: types.CHANGE_TITLE,
  payload: { id, title },
});
