import React, { Fragment, Component } from 'react'

import TableRow from './TableRow'
import TableRowNoData from './TableRowNoData'
import LoaderSpinners from '../components/LoaderSpinners'

export default class ListTable extends Component {
  componentDidMount(){
    console.log('ListTable: componentDidMount : ');
    this.props.fetchListData( this.props.paramPageNum, this.props.paramPageSize );
  }

  componentDidUpdate(){
    console.log('ListTable: componentDidUpdate : ');
  }

  render () {
    console.log( 'ListTable Render: ', this.props);
    if(this.props.loading){
      return (
        <LoaderSpinners />
      )
    }
    return (
      <Fragment>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="text-center">#</th>
              <th scope="col" className="text-center">제목</th>
              <th scope="col" className="text-center">작성자</th>
              <th scope="col" className="text-center">작성일</th>
              <th scope="col" className="text-center">조회수</th>
            </tr>
          </thead>
          <tbody>
            {
              (this.props.list.length > 0)? this.props.list.map( (row, index) => {
              return( <TableRow { ...row } key={ index } /> )
              }): <TableRowNoData />
            }
          </tbody>
        </table>
        {/* {
          (this.props.loading)? <LoaderSpinners /> : ''
        } */}
      </Fragment>
    )
  }
}