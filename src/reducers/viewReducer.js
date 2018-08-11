import { FETCH_VIEW, FETCH_VIEW_SUCCESS, FETCH_VIEW_ERROR } from '../actions/viewAction'

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
    case FETCH_VIEW:
      console.log('list fetch 진행중');
      return { ...state, loading: true }

    case FETCH_VIEW_SUCCESS:
      console.log('list fetch 성공');
      return { ...state, loading: false , ...action.payload }

    case FETCH_VIEW_ERROR:
      console.log('list fetch 실패', ...action.payload);
      return { ...state, loading: false, error: true }

    default:
      return state;
  }
}