import { connect } from 'react-redux'
import axios from 'axios'
// import dotenv from 'dotenv'
// const { SERVER_HOST, SERVER_PORT } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = '8800'

import { FETCH, FETCH_SUCCESS, FETCH_FAILED } from '../actions/listAction'
import ListTable from '../components/ListTable'

const mapStateToProps = (state) => {
  // console.log( state );
  return {
    list: state.listData.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchListData: () => {
      dispatch({
        type: FETCH
      });
      
      console.log('----');
      axios.get(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/`, {crossDomain: true, responseType: 'json', headers: {'Content-Type': 'application/json'}})
      .then( (result) => {
        console.log( "Success" );
        console.log( result );
        
        if( result.status === 200 ){
          console.log( result.data.response.list);
          console.log('ddddddd');
          dispatch({
            type: FETCH_SUCCESS,
            payload: result.data.response.list,
          });
        }
      })
      .catch( (response) => {
        console.log( "Error" );
        console.log( response );
        // dispatch({
        //   type: FETCH_SUCCESS,
        //   payload: result.data.response.list,
        // });
      })
    }
  } 
}

export default connect( mapStateToProps, mapDispatchToProps )(ListTable);