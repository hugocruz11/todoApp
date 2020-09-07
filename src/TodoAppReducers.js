import { combineReducers } from 'redux';
import { TodoAppReducers } from './reducers';

export default combineReducers({
  todoApp: TodoAppReducers,
});
