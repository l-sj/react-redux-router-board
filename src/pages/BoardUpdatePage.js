import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

export default class BoardCreatePage extends Component {
  constructor(){
    super();
  }

  prevGoBack() {
    this.props.history.goBack();
  }

  render() {
    console.log('this.props.history: ', this.props.history);
    return (
      <Fragment>
        <div id="board_content">
          <form>
            <fieldset>
              <legend>글수정</legend>
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
                <input type="text" className="form-control" id="user_name" placeholder="작성자명" disabled="disabled" />
              </div>
            </fieldset>
          </form>
        </div>
        <div id="board_bottom" className="clearfix">
          <div className="float-right">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <Link to="/" className="btn btn-outline-dark btn-sm">목록</Link>
            </div>
            <div className="btn-group" role="group" aria-label="Second group">
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={ this.prevGoBack.bind(this) }>취소</button>
              <button type="submit" className="btn btn-outline-primary btn-sm ml-1">수정</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}