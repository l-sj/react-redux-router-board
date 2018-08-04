import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

export default class BoardViewPage extends Component {
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
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">작성자</th>
                <td>소보로</td>
                <th>조회수</th>
                <td>77</td>
              </tr>
              <tr>
                <th scope="row">제목</th>
                <td colSpan="3">게시글 샘플 데이터 입니다.</td>
              </tr>
              <tr>
                <th scope="row">내용</th>
                <td colSpan="3">안녕하세요. 소보로입니다</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="board_bottom" className="clearfix">
          <div className="float-right">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <Link to="/" className="btn btn-outline-dark btn-sm">목록</Link>
            </div>
            <div className="btn-group" role="group" aria-label="Second group">
              <Link to="/board_update" className="btn btn-outline-dark btn-sm">수정</Link>
              <button type="button" className="btn btn-outline-dark btn-sm">삭제</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}