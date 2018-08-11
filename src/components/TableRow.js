import React, { Fragment, Component } from 'react'

export default class TableRow extends Component {
  componentDidMount(){
    console.log('TableRow: ', this.props);
  }

  render () {
    console.log('TableRow Render: ', this.props);
    return (
      <Fragment>
        {
          this.props.list.map( (row, index) => {
            return (
              <tr key={ index }>
                <th scope="row" className="text-center">{ row.id }</th>
                <td>
                  <a href="#">{ row.title }</a>
                </td>
                <td className="text-center">{ row.user_name }</td>
                <td className="text-center">{ row.created_at }</td>
                <td className="text-center">{ row.view_count }</td>
              </tr>
            )
          })
        }
      </Fragment>
    )
  }
}