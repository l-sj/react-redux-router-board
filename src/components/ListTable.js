import React, { Fragment, Component } from 'react'

import TableRow from './TableRow'
import TableRowNoData from './TableRowNoData'

export default class ListTable extends Component {
  componentDidMount(){
    this.props.fetchListData();
    console.log('ListTable DidMount props: ', this.props);
  }

  render () {
    console.log('ListTable render: ', this.props);
    console.log('ListTable render: ', this.props.list.length);

    return (
      <Fragment>
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
            (function(self){
              if ( self.props.list.length > 0) {
                return (
                  <Fragment>
                    {
                      self.props.list.map( (row, index) => {
                        return (
                          // <TableRow { ...row } key={ index } linkToViewPage={ self.linkToViewPage } 와 같이 TableRow 컴포넌트에 있는 linkToViewPage 함수가 있는 이유는 무엇? />
                          <TableRow { ...row } key={ index } />
                        )
                      })
                    }
                  </Fragment>
                )
              } else {
                console.log( 'No' );
              }
            })(this)
          }
        </tbody>
      </Fragment>
    )
  }
}