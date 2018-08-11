import React, { Fragment, Component } from 'react'



import TableRow from './TableRow'
import TableRowNoData from './TableRowNoData'

export default class TableRowBody extends Component {
  componentDidMount(){
    console.log('TableRowBody: ', this.props);
  }

  render() {
    console.log('TableRowBody render: ', this.props);
    if( this.props.list.length > 0 ) {
      return (
        <Fragment>
          {
            this.props.list.map( (row, index) => {
              return (
                <TableRow key={ index } { ...row } />
              )
            })
          }
        </Fragment>
      )
    } else {
      return (
        <TableRowNoData />
      )
    }
  }
}