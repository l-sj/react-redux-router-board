import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from '../actions/listAction'

const INITIAL_STATE = {
  list: [],
  page_num: 1,
  page_size: 10,
  totalCount: null,
  loading: false,
  error: false,
}

export default function (state = INITIAL_STATE, action) {
  switch( action.type ){
    case FETCH:
      console.log('list fetch 진행중');
      return { ...state, loading: true }

    case FETCH_SUCCESS:
      console.log('list fetch 성공');
      return { ...state, loading: false, ...action.payload }

    case FETCH_FAILED:
      console.log('list fetch 실패');
      return { ...state, loading: false, error: true }

    default:
      return state;
  }
}