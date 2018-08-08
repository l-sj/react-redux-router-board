import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

import ViewTable from '../components/ViewTable'

export default class BoardViewPage extends Component {
  render() {
    return (
      <Fragment>
        <div id="board_content">
          <table className="table table-bordered">
            <ViewTable />
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