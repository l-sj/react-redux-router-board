import { GET_LIST } from '../actions/listAction'

const INITIAL_STATE = {
  list: []
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_LIST:
      console.log('listReducer')
      return {...state, list: action.payload.response}
    default:
      return state
  }
}