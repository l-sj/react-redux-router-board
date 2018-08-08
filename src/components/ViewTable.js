import React, { Fragment, Component } from 'react'

export default class ViewTable extends Component {
  render () {
    return (
      <Fragment>
        <tbody>
          <tr>
            <th scope="row">작성자</th>
            <td>작성자 value</td>
            <th>조회수</th>
            <td>조회수 value</td>
          </tr>
          <tr>
            <th scope="row">제목</th>
            <td colSpan="3">제목 value</td>
          </tr>
          <tr>
            <th scope="row">내용</th>
            <td colSpan="3">내용 value</td>
          </tr>
        </tbody>
      </Fragment>
    )
  }
}