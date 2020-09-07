import { ActionType } from '../actions/TodoAppActions';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CLEAR_DATA:
      return initialState;
    case ActionType.ADD_ITEM:
      return {
        ...state,
        Items: [...state, action.data],
      };
    case ActionType.REMOVE_ITEM:
      let items = state;
      items.splice(action.data, 1);
      return {
        ...state,
        Items: items,
      };
    default:
      return state;
  }
};
