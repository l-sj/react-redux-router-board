import React, { Fragment, Component } from 'react'
import PropTypes from 'proptypes'

export default class TableRow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount(){
  }

  linkToViewPage(id){
    this.context.router.history.push(`/board_view/${id}`);
  }

  render () {
    return (
      <Fragment>
        <tr>
          <th scope="row" className="text-center">{ this.props.id }</th>
          <td>
            <a onClick={ this.linkToViewPage.bind( this, this.props.id ) }>{ this.props.title }</a>
            {/* <a href="#">{ this.props.title }</a> */}
          </td>
          <td className="text-center">{ this.props.user_name }</td>
          <td className="text-center">{ this.props.created_at }</td>
          <td className="text-center">{ this.props.view_count }</td>
        </tr>
      </Fragment>
    )
  }
}