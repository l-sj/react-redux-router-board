import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import listReducer from './listReducer'
// import createReducer from './createReducer'
import viewReducer from './viewReducer'
import updateReducer from './updateReducer'
const rootReducer = combineReducers({
  router,
  listData: listReducer,
  // createData: createReducer,
  viewData: viewReducer,
  updateData: updateReducer,
});

export default rootReducer;
