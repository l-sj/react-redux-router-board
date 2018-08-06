import { GET_ITEM } from '../actions/viewAction'

const INITIAL_STATE = {
  id: 0,
  title: null,
  name: null,
  date: 0,
  hits: 0,
}

export default function(state = INITIAL_STATE, action){
  console.log('VIEW REDUCER FILE: ', action.type);
  switch(action.type){
    case GET_ITEM:
      console.log('-------View listReducer: ')
      return {...state, 
        id: action.payload.response.id, 
        title: action.payload.response.title, 
        name: action.payload.response.userId, 
        date: action.payload.response.id, 
        hits: action.payload.response.id}
    default:
      console.log('-------View default: ')
      return state
  }
}