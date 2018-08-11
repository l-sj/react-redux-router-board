import React, { Fragment, Component } from 'react'

import TableRow from './TableRow'
import TableRowNoData from './TableRowNoData'
import LoaderSpinners from '../components/LoaderSpinners'

export default class ListTable extends Component {
  componentDidMount(){
    this.props.fetchListData();
  }

  render () {
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
                  return (
                    <TableRowNoData />
                  )
                }
              })(this)
            }
          </tbody>
        </table>
        {
          (this.props.loading)? <LoaderSpinners /> : ''
        }
      </Fragment>
    )
  }
}