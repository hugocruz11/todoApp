export const ActionType = {
  CLEAR_DATA: 'CLEAR_DATA',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

export const clearData = () => {
  return { type: ActionType.CLEAR_DATA };
};

export const addItem = (data) => {
  return { type: ActionType.ADD_ITEM, data };
};

export const removeItem = (data) => {
  return { type: ActionType.REMOVE_ITEM, data };
};
