import React, { Fragment, Component } from 'react'

export default class ListItem extends Component {
  componentDidMount(){
    console.log('ListItem: ', this.props);
  }

  render () {
    return (
      <Fragment>
        <tr>
          <th scope="row" className="text-center">{ this.props.id }</th>
          <td>
            <a href="#">{ this.props.title }</a>
          </td>
          <td className="text-center">{ this.props.user_name }</td>
          <td className="text-center">{ this.props.created_at }</td>
          <td className="text-center">{ this.props.view_count }</td>
        </tr>
      </Fragment>
    )
  }
}