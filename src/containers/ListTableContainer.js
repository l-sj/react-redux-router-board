import { connect } from 'react-redux'
import axios from 'axios'
// import dotenv from 'dotenv'
// const { SERVER_HOST, SERVER_PORT } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = '8800'

import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from '../actions/listAction'
import ListTable from '../components/ListTable'
import * as ajaxRequest from '../utils/ajaxRequest'

const mapStateToProps = (state) => {
  // console.log( state );
  return {
    // list: state.listData.list,
    // loading: state.listData.loading,
    // page_num: state.listData.page_num,
    // page_size: state.listData.page_size,
    // totalCount: state.listData.totalCount,
    ...state.listData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchListData: async ({ paramPageNum, paramPageSize, ordering, sort, search_condition, search_value, router, blockCountPerPage }) => {
      dispatch({
        type: FETCH
      });

      try {
        const result = await ajaxRequest.getBoardList({ paramPageNum, paramPageSize, ordering, sort, search_condition, search_value, router });
        // const { list, page_num, page_size, totalCount } = result.data.response;
        console.log('result.data.response.totalCount:-----', result.data.response);
        console.log('result.data.response.totalCount:-----', blockCountPerPage);
        dispatch({
          type: FETCH_SUCCESS,
          payload: {
            ...result.data.response,
            blockCountPerPage
          } 
        });
      } catch(e) {
        console.log( "error" );
        console.log( e );
        dispatch({
          type: FETCH_FAILED,
          payload: e,
        });
      }
      

      /*
      axios.get(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${param}`, {crossDomain: true, responseType: 'json', headers: {'Content-Type': 'application/json'}})
      .then( (result) => {
        if( result.status === 200 ){
          const { list, page_num, page_size, totalCount } = result.data.response;
          console.log( "------------ListTableContainer Success------------" );
          console.log( result.data.response );
          dispatch({
            type: FETCH_SUCCESS,
            payload: {
              list,
              page_num,
              page_size,
              totalCount
            } 
          });
        }
      })
      .catch( (response) => {
        console.log( "error" );
        console.log( response );
        dispatch({
          type: FETCH_FAILED,
          payload: response,
        });
      })
      */
    }
  } 
}

export default connect( mapStateToProps, mapDispatchToProps )(ListTable);