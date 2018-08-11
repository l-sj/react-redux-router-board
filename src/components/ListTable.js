import React, { Fragment, Component } from 'react'

import TableRow from './TableRow'
import TableRowNoData from './TableRowNoData'

export default class ListTable extends Component {
  componentDidMount(){
    this.props.fetchListData();
    console.log('ListTable DidMount props: ', this.props);
  }

  render () {
    console.log('ListTable render: ', this.props);
    console.log('ListTable render: ', this.props.list.length);

    return (
      <Fragment>
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="text-center">#</th>
            <th scope="col" className="text-center">제목</th>
            <th scope="col" className="text-center">작성자</th>
            <th scope="col" className="text-center">작성일</th>
            <th scope="col" className="text-center">조회수</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.props.list.map( (row, index) => {
            return (
              <TableRow key={index} {...row} />
            )
          })} */}
          
          {
            (function(self){
              if ( self.props.list.length > 0) {
                /*
                self.props.list.map( (row, index) => {
                  console.log('row : ', row);
                  return (
                    <tr>
                      <td colSpan="5">map list</td>
                    </tr>
                  )
                })
                */

                return (
                  <TableRow { ...self.props } />
                )
              } else {
                return (
                  <TableRowNoData />
                )
              }
            })(this)
          }

          {/* <TableRow />
          <tr>
            <td scope="row" colSpan="5" className="text-center">내용이 없습니다.</td>
          </tr> */}
        </tbody>
      </Fragment>
    )
  }
}