import { connect } from 'react-redux'
import axios from 'axios'
// import dotenv from 'dotenv'
// const { SERVER_HOST, SERVER_PORT } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = '8800'

import { 
  FETCH_VIEW, FETCH_VIEW_SUCCESS, FETCH_VIEW_FAILED,
  UPDATE_COUNT_SUCCESS, UPDATE_COUNT_FAILED
} from '../actions/viewAction'

import ViewTable from '../components/ViewTable'

const mapStateToProps = (state) => {
  console.log( state.viewData );
  return {
    viewData: state.viewData,
    router: state.router,
    title: state.viewData.title,
    content: state.viewData.content,
    user_name: state.viewData.user_name,
    view_count: state.viewData.view_count,
    loading: state.viewData.loading,
    error: state.viewData.error,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchViewData: (id) => {
      dispatch({
        type: FETCH_VIEW
      });
      
      axios.get(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${ id }`, {crossDomain: true, responseType: 'json', headers: {'Content-Type': 'application/json'}})
      .then( (result) => {
        console.log( "Success" );
        
        if( result.status === 200 ){
          dispatch({
            type: FETCH_VIEW_SUCCESS,
            payload: result.data.response,
          });
        }
      })
      .catch( (response) => {
        console.log( "FAILED" );
        dispatch({
          type: FETCH_VIEW_FAILED,
          payload: response
        });
      })
    },
    viewCountUpdate: (id) => {
      const storageID = localStorage.getItem('viewItem_ID');
      console.log( 'storageID != id: ', storageID , id );

      if( storageID != id ){
        localStorage.setItem('viewItem_ID', id);
        axios.put(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${ id }/count`, {crossDomain: true, responseType: 'json', headers: {'Content-Type': 'application/json'}}).
        then(
          (result) => {
            console.log( 'UPDATE_COUNT_SUCCESS: ', result);
            dispatch({
              type: UPDATE_COUNT_SUCCESS,
            });
          }
        ).catch(
          (response) => {
            console.log( 'UPDATE_COUNT_FAILED: ', response);
            dispatch({
              type: UPDATE_COUNT_FAILED,
              payload: response
            })
          }
        )
      }
    },

  } 
}

export default connect( mapStateToProps, mapDispatchToProps )(ViewTable);