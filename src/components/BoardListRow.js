import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import axios from  'axios'

import { GET_LIST } from '../actions/listAction'

import ListRow from './ListRow'

// const mapStateToProps = (state) => ({
//   borderListData: state.borderList,
//   list: state.borderList.list,
// })
const mapStateToProps = (state) => (
  (state)=>{
    console.log('mapStateToProps')

    return {
      borderListData: state.borderList,
      list: state.borderList.list,
    }
  }
)

// const mapDispatchToProps = (dispatch) => ({
//   getListDispatch: () => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(function(result){
//         if(result.status === 200 ) {
//           // 데이터 가져오는게 성공했다면,  액션의 타입은 GET_LIST, 데이터가 담긴 배열을 넘겨준다.
//           dispatch({
//             type: GET_LIST,
//             payload: {
//               response: result.data
//             }
//           });
//         }
//         console.log('SUCCESS ')
//       })
//       .catch( function(response){
//         console.log('ERROR: ', response.data)
//       })
//   }
// })

const mapDispatchToProps = (dispatch) => (
  (dispatch) => {
    console.log('mapDispatchToProps')

    return {
      getListDispatch: () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(function(result){
            console.log('SUCCESS ')
            if(result.status === 200 ) {
              // 데이터 가져오는게 성공했다면,  액션의 타입은 GET_LIST, 데이터가 담긴 배열을 넘겨준다.
              dispatch({
                type: GET_LIST,
                payload: {
                  response: result.data
                }
              });
            }
          })
          .catch( function(response){
            console.log('ERROR: ', response.data)
          })
      }
    }
  }
)

class BoardListRow extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    // 컴포넌트 마운트가 끝났을때, 게시판 데이터를 가져오는 함수 실행.
    this.props.getListDispatch();
  }

  render(){
    // console.log('borderListData: ', this.props.borderListData );
    // console.log('list: ', this.props.list );
    console.log('render');
    return(
      <Fragment>
        {
          this.props.list.map((item, index)=>{
            return (
              <ListRow key={ index } id={ item.id } title={ item.title } name={ item.userId } date={ item.userId } hits={ item.userId } />
            )
          })
        }
      </Fragment>
    )  
  }
}

// export default BoardListRow;
export default connect(mapStateToProps, mapDispatchToProps)(BoardListRow);

/*
console.log 로 확인되는 순서

mapStateToProps       BoardListRow.js:35 
mapDispatchToProps    BoardListRow.js:67 
render                BoardListRow.js:111 
componentDidMount     BoardListRow.js:102 
SUCCESS               BoardListRow.js:72  
listReducer           listReducer.js:15 
mapStateToProps       BoardListRow.js:35 
render                BoardListRow.js:111 

*/