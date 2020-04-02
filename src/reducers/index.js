import { combineReducers } from 'redux';
import techReducer from './TechReducer';
import LogReducer from './LogReducer'

export default combineReducers({
  log : LogReducer,
  tech: techReducer
});
