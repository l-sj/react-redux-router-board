import { connect } from 'react-redux'
import axios from 'axios'
// import dotenv from 'dotenv'
// const { SERVER_HOST, SERVER_PORT } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = '8800'

import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from '../actions/listAction'
import Pagination from '../components/Pagination'
import * as ajaxRequest from '../utils/ajaxRequest'

const mapStateToProps = (state) => {
  // console.log( state );
  return {
    ...state.listData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //
    pushPagination: async ({ page_num, page_size, router }) => {
      try {
        const result = await ajaxRequest.getBoardList({ page_num, page_size, router })
        dispatch({
          type: FETCH_SUCCESS,
          payload: {
            ...result.data.response
          }
        })
      } catch(e) {
        console.log( "error" );
        console.log( e );
        dispatch({
          type: FETCH_FAILED,
          payload: e,
        });
      }
    }
  } 
}

export default connect( mapStateToProps, mapDispatchToProps )(Pagination);