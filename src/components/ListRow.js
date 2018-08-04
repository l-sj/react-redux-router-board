import React, { Fragment, Component } from 'react'

export default class ListRow extends Component {
  render(){
    return (
      <Fragment>
        <tr>
          <th scope="row" className="text-center">{ this.props.id }</th>
          <td><a href="#">{ this.props.title }</a></td>
          <td className="text-center">{ this.props.name }</td>
          <td className="text-center">{ this.props.date }</td>
          <td className="text-center">{ this.props.hits }</td>
        </tr>
      </Fragment>
    )
  }
}