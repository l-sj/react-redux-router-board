import { FETCH_UPDATE, FETCH_UPDATE_SUCCESS, FETCH_UPDATE_FAILED } from '../actions/updateAction'

const INITIAL_STATE = {
  id: null,
  title: null,
  content: null,
  user_name: null,
  view_count: null,
  created_at: null,
  loading: false,
  error: false,
}

export default function (state = INITIAL_STATE, action) {
  switch( action.type ){
    case FETCH_UPDATE:
      console.log('list fetch 진행중');
      return { ...state, loading: true }

    case FETCH_UPDATE_SUCCESS:
      console.log('list fetch 성공');
      return { ...state, loading: false, ...action.payload }

    case FETCH_UPDATE_FAILED:
      console.log('list fetch 실패');
      return { ...state, loading: false, error: true }

    default:
      return state;
  }
}