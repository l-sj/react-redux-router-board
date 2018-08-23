import { connect } from 'react-redux'
import axios from 'axios'
import * as ajaxRequest from '../utils/ajaxRequest'

// import dotenv from 'dotenv'
// const { SERVER_HOST, SERVER_PORT } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = '8800'

import { ADD_ROW, ADD_ROW_SUCCESS, ADD_ROW_FAILED } from '../actions/createAction'
import CreateTable from '../components/CreateTable'

const mapStateToProps = (state) => {
  //
}
const mapDispatchToProps = (dispatch) => {
  return {
    borderCreate: async (title, content, name, router) => {
      const result = await ajaxRequest.postBoardCreate(title, content, name)
      // console.log( result );
      if ( result.data.success ) {
        router.history.push('/')
      }
    }
  } 
}

export default connect( mapStateToProps, mapDispatchToProps )(CreateTable);