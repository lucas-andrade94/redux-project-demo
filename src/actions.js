import * as actions from "./actionTypes";

export const bugAdded = (bugDescription) => {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: bugDescription,
    },
  };
};

export const bugResolved = (bugId) => {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id: bugId,
    },
  };
};

export const bugRemoved = (bugId) => {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: bugId,
    },
  };
};
