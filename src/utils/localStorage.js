export const saveState = (state) => {
  try {
    Object.keys(state.card).forEach((id) => {
      if (!state.card[id]) {
        delete state.card[id];
      }
    });

    const serializedState = JSON.stringify(state);

    localStorage.setItem("redux-state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("redux-state");

    if (!serializedState) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    return undefined;
  }
};
