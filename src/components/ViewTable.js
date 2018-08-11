import React, { Fragment, Component } from 'react'

export default class ViewTable extends Component {
  componentDidMount(){
    console.log( this.props.id );
    this.props.fetchViewData( this.props.id );
  }

  render () {
    console.log( 'viewTable this.prop', this.props );
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}