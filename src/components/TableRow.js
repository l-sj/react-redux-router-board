import React, { Fragment, Component } from 'react'

export default class TableRow extends Component {
  componentDidMount(){
    console.log('TableRow: ', this.props);
  }

  render () {
    return (
      <Fragment>
        {
          this.props.list.map( (row, index) => {
            return (
              <tr key={index}>
                <th scope="row" className="text-center">{ row.id }</th>
                <td>
                  <a href="#">{ row.title }</a>
                </td>
                <td className="text-center">{ row.user_name }</td>
                <td className="text-center">{ row.created_at }</td>
                <td className="text-center">{ row.view_count }</td>
              </tr>
              // <TableRow key={index} {...row} />
            )
          })
        }

        {/* <tr>
          <th scope="row" className="text-center">1</th>
          <td>
            <a href="#">1</a>
          </td>
          <td className="text-center">1</td>
          <td className="text-center">1</td>
          <td className="text-center">1</td>
        </tr> */}
        
        {/* <tr>
          <th scope="row" className="text-center">{ this.props.id }</th>
          <td>
            <a href="#">{ this.props.title }</a>
          </td>
          <td className="text-center">{ this.props.user_name }</td>
          <td className="text-center">{ this.props.created_at }</td>
          <td className="text-center">{ this.props.view_count }</td>
        </tr> */}
      </Fragment>
    )
  }
}