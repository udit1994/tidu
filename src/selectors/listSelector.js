import { createSelector } from "reselect";

export const listSelector = createSelector(
  (state) => state.list,
  (data) => data
);
