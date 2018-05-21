
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import todoList from './todoList';

export default combineReducers({
  todoList,
  routing: routerReducer,
});
