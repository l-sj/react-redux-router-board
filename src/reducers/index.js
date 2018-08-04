import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import listReducer from './listReducer'

const rootReducer = combineReducers({
  router,
  borderList: listReducer
});

export default rootReducer;