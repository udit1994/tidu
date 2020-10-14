export const saveState = (state) => {
  try {
    Object.keys(state.todo).forEach((id) => {
      if (!state.todo[id]) {
        delete state.todo[id];
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
