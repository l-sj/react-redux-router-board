import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

export default class BoardViewPage extends Component {
  render() {
    return (
      <Fragment>
        <div id="board_content">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">작성자</th>
                <td>작성자 value</td>
                <th>조회수</th>
                <td>조회수 value</td>
              </tr>
              <tr>
                <th scope="row">제목</th>
                <td colSpan="3">제목 value</td>
              </tr>
              <tr>
                <th scope="row">내용</th>
                <td colSpan="3">내용 value</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="board_bottom" className="clearfix">
          <div className="float-right">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-outline-dark btn-sm">목록</button>
            </div>
            <div className="btn-group" role="group" aria-label="Second group">
              <button type="button" className="btn btn-outline-dark btn-sm">수정</button>
              <button type="button" className="btn btn-outline-dark btn-sm">삭제</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}