import { connect } from 'react-redux'
import axios from 'axios'
// import dotenv from 'dotenv'
// const { SERVER_HOST, SERVER_PORT } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = '8800'

import { FETCH_UPDATE, FETCH_UPDATE_SUCCESS, FETCH_UPDATE_FAILED } from '../actions/updateAction'
import UpdateTable from '../components/UpdateTable'
import * as ajaxRequest from '../utils/ajaxRequest'

const mapStateToProps = (state) => {
  // console.log( state );
  return {
    // ...state,
    // updateState: state.updateData,
    ...state.updateData,
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchUpdateData: async (id) => {
    try {
      const result = await ajaxRequest.getBoard(id)

      dispatch({
        type: 'FETCH_UPDATE_SUCCESS',
        payload: {
          ...result.data.response
        }
      })
    } catch(e) {
      console.log('try catch error UPDATE : ', e);
    }
  },
  borderUpdate: async (id, title, content, router) => {
    try {
      const result = await ajaxRequest.pushBoardUpdate(id, title, content);
      // console.log('수정 업데이트 : ', result, router );
      if( result.data.success ){
        router.history.goBack();
      }
    } catch(e) {
      console.log('try catch error UPDATE 수정버튼 클릭 : ', e);
    }
  }
})


export default connect( mapStateToProps, mapDispatchToProps )(UpdateTable);