import React, { Fragment, Component } from 'react'

import LoaderSpinners from '../components/LoaderSpinners'

export default class ViewTable extends Component {
  componentDidMount(){
    const id = this.props.id;
    this.props.viewCountUpdate( id );
    this.props.fetchViewData( id );
  }

  render () {
    if(this.props.loading){
      return (
        <LoaderSpinners />
      )
    }
    return (
      <Fragment>
        {/* {
          (this.props.loading)? <LoaderSpinners /> : ''
        } */}
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">작성자</th>
              <td>{ this.props.user_name }</td>
              <th>조회수</th>
              <td>{ this.props.view_count }</td>
            </tr>
            <tr>
              <th scope="row">제목</th>
              <td colSpan="3">{ this.props.title }</td>
            </tr>
            <tr>
              <th scope="row">내용</th>
              <td colSpan="3">{ this.props.content }</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    )
  }
}