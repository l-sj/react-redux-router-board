import React, { Fragment, Component } from 'react'

export default class CreateTable extends Component {
  render () {
    return (
      <Fragment>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input type="text" className="form-control" id="title" placeholder="제목을 입력하세요." />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea id="content" className="form-control" id="content" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="title">작성자</label>
          <input type="text" className="form-control" id="user_name" placeholder="작성자명" />
        </div>
      </Fragment>
    )
  }
}