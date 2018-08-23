import { connect } from 'react-redux'
import axios from 'axios'
// import dotenv from 'dotenv'
// const { SERVER_HOST, SERVER_PORT } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = '8800'

import { ADD_ROW, ADD_ROW_SUCCESS, ADD_ROW_FAILED } from '../actions/createAction'
import CreateTable from '../components/CreateTable'

const mapStateToProps = (state) => {
  // console.log( state );
  return {
    list: state.listData.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addListData: () => {
      dispatch({
        type: ADD_ROW
      });

      axios.get(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/`, {crossDomain: true, responseType: 'json', headers: {'Content-Type': 'application/json'}})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  } 
}

export default connect( mapStateToProps, mapDispatchToProps )(CreateTable);