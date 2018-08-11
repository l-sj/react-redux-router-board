import React, { Fragment, Component } from 'react'

export default class TableRowNoData extends Component {
  componentDidMount(){
  }

  render () {
    return (
      <Fragment>
        <tr>
          <td scope="row" colSpan="5" className="text-center">내용이 없습니다.</td>
        </tr>
      </Fragment>
    )
  }
}