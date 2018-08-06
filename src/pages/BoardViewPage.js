import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

import BoardViewContent from '../components/BoardViewContent'

export default class BoardViewPage extends Component {
  // constructor(){
  //   super();
  // }

  // prevGoBack() {
  //   this.props.history.goBack();
  // }

  render() {
    console.log('View this.props.history: ', this.props.history);
    console.log('View this: ', this);
    return (
      <Fragment>
        <div id="board_content">
          <table className="table table-bordered">
            <BoardViewContent />
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