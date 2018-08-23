import { 
  FETCH_VIEW, FETCH_VIEW_SUCCESS, FETCH_VIEW_FAILED,
  UPDATE_COUNT_SUCCESS, UPDATE_COUNT_FAILED
} from '../actions/viewAction'

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
      console.log('view data fetch 진행중');
      return { ...state, loading: true }

    case FETCH_VIEW_SUCCESS:
      console.log('view data fetch 성공');
      return { ...state, loading: false , ...action.payload }

    case FETCH_VIEW_FAILED:
      console.log('view data fetch 실패', ...action.payload);
      return { ...state, loading: false, error: true }

    case UPDATE_COUNT_SUCCESS:
      console.log('count update 성공-----------: ', action.payload );
    return { ...state }

    case UPDATE_COUNT_FAILED:
    console.log('count update 실패', action.payload );
      return { ...state, error: true }

    default:
      return state;
  }
}