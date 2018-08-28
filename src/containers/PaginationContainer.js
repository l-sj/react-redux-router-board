import { connect } from 'react-redux'
import axios from 'axios'
// import dotenv from 'dotenv'
// const { SERVER_HOST, SERVER_PORT } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = '8800'

import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from '../actions/listAction'
import Pagination from '../components/Pagination'

const mapStateToProps = (state) => {
  // console.log( state );
  return {
    ...state.listData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //
    pushPagination: ( paramPageNum, paramPageSize, router ) => {
      var param = '?';
      (paramPageNum)? param += `page_num=${paramPageNum}&`: '';
      (paramPageSize)? param += `page_size=${paramPageSize}&`: '';

      console.log('mapDispatchToProps----------', param);
      axios.get(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${param}`, {crossDomain: true, responseType: 'json', headers: {'Content-Type': 'application/json'}})
      .then((result) => {
        if( result.status === 200 ){
          const { list, page_num, page_size, totalCount } = result.data.response;
          console.log('list, page_num, page_size, totalCount: ', result.data.response);
          //
          dispatch({
            type: FETCH_SUCCESS,
            payload: {
              list,
              page_num: paramPageNum,
              page_size: paramPageSize,
              totalCount,
            }
          })
          //
          router.history.push(`/${param}`)
        }
      })
      .catch((response) => {
        console.log( "error" );
        console.log( response );
        dispatch({
          type: FETCH_FAILED,
          payload: response,
        });
      })
    }
  } 
}

export default connect( mapStateToProps, mapDispatchToProps )(Pagination);