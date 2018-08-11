import React, { Fragment, Component } from 'react'

import TableRowBody from './TableRowBody'

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
          <TableRowBody { ...this.props } />
        </tbody>
      </Fragment>
    )
  }
}