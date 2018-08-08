import React, { Fragment, Component } from 'react'

export default class ListItem extends Component {
  render () {
    return (
      <Fragment>
        <tr>
          <th scope="row" className="text-center">1</th>
          <td>
            <a href="#">제목 value</a>
          </td>
          <td className="text-center">작성자 value</td>
          <td className="text-center">작성일 value</td>
          <td className="text-center">조회수 value</td>
        </tr>
      </Fragment>
    )
  }
}