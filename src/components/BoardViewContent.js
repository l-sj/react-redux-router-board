import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import axios from  'axios'

import { getItemDispatch, GET_ITEM } from '../actions/viewAction'

const mapStateToProps = (state) => (
  (state)=>{
    console.log('VIEW mapStateToProps: ', state.viewReducer)

    return {
      viewReducerData: state.viewReducer,
    }
  }
)

const mapDispatchToProps = (dispatch) => ({
  getItemDispatch: (id) => {

    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(function(result){
        console.log('VIEW SUCCESS 1: ', result);
        //
        if(result.status === 200 ) {
          console.log('VIEW SUCCESS 2: ', result.status);
          dispatch({
            type: GET_ITEM,
            payload: {
              response: result.data
            }
          });
          console.log('VIEW SUCCESS 3: ', result.data);
        }
        //
      }).catch( function(response){
        console.log('VIEW ERROR: ', response.data)
      })
  }
})

class BoardViewContent extends Component {
  componentDidMount(){
    console.log('-----------------------------------------');
    console.log(window.history);
    console.log(window.history.state.state.id);
    // this.props.getItemDispatch(10);
    this.props.getItemDispatch(window.history.state.state.id);
    console.log('BoardViewContent componentDidMount: ', this);
  }

  render() {
    console.log('this.props.viewReducerData.id: ', this.props.viewReducerData.id  );
    return (
      <Fragment>
        <tbody>
          <tr>
            <th scope="row">작성자</th>
            <td>{ this.props.viewReducerData.name }</td>
            <th>조회수</th>
            <td>{ this.props.viewReducerData.hits }</td>
          </tr>
          <tr>
            <th scope="row">제목</th>
            <td colSpan="3">{ this.props.viewReducerData.title }</td>
          </tr>
          <tr>
            <th scope="row">내용</th>
            <td colSpan="3">{ this.props.viewReducerData.title }</td>
          </tr>
        </tbody>
      </Fragment>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoardViewContent);