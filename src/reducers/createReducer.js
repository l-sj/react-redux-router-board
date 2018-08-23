import { ADD_ROW, ADD_ROW_SUCCESS, ADD_ROW_FAILED } from '../actions/createAction'

const INITIAL_STATE = {
  loading: false,
  error: false,
}

export default function (state = INITIAL_STATE, action) {
  switch( action.type ){
    case ADD_ROW:
      console.log('create fetch 진행중');
      return { ...state, loading: true }

    case ADD_ROW_SUCCESS:
      console.log('create fetch 성공');
      return { ...state, loading: false, item: action.payload }

    case ADD_ROW_FAILED:
      console.log('create fetch 실패');
      return { ...state, loading: false, error: true }

    default:
      return state;
  }
}