import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import listReducer from './listReducer'
import viewReducer from './viewReducer'

const rootReducer = combineReducers({
  router,
  listReducer,
  viewReducer
});

export default rootReducer;