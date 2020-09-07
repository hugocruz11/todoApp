import { createStore, applyMiddleware } from 'redux';
import TodoAppReducers from './TodoAppReducers';
import thunk from 'redux-thunk';

export default TodoAppStore = () => {
  let storeApp = createStore(TodoAppReducers, applyMiddleware(thunk));
  return storeApp;
};
