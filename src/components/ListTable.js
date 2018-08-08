import React, { Fragment, Component } from 'react'

import TableRow from './TableRow'

export default class ListTable extends Component {
  render () {
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
          <TableRow />
        </tbody>
      </Fragment>
    )
  }
}