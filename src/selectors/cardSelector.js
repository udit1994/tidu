import { createSelector } from "reselect";

export const cardSelector = createSelector(
  (state) => state.card,
  (data) => data
);

export const cardIdSelector = createSelector(
  (state) => state.card.nextId,
  (id) => id
);

export const cardInfoSelector = createSelector(
  (state) => state.card[state.ui.selectedCard],
  (card) => card
);
