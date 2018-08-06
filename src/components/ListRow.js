import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListRow extends Component {
  render(){
    return (
      <Fragment>
        <tr>
          <th scope="row" className="text-center">{ this.props.id }</th>
          <td>
            <Link to={{
              pathname: `/board_view/${ this.props.id }`,
              state: this.props
            }}>
              { this.props.title }
            </Link>
          </td>
          <td className="text-center">{ this.props.name }</td>
          <td className="text-center">{ this.props.date }</td>
          <td className="text-center">{ this.props.hits }</td>
        </tr>
      </Fragment>
    )
  }
}