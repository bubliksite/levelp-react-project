import { combineReducers } from 'redux';
import modalReducer from './modals';

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default rootReducer;
