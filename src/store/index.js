import { combineReducers } from 'redux';
import todoReducer from './todos';
import modalReducer from './modals';

const rootReducer = combineReducers({
  todo: todoReducer,
  modal: modalReducer,
});

export default rootReducer;
