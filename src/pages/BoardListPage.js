import React, { Fragment, Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';

import Pagination from '../components/Pagination'
import LoaderSpinners from '../components/LoaderSpinners'
// import ListTable from '../components/ListTable'
import ListTableContainer from '../containers/ListTableContainer'


export default class BoardListPage extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    // 데이터 추가 전까지 임시
    const viewItem_ID = 'viewItem_ID'
    localStorage.setItem(viewItem_ID, 1)
  }

  render() {
    return (
      <Fragment>
        <div id="board_list">
          <table className="table">
            {/* <ListTable /> */}
            <ListTableContainer />
          </table>
        </div>
        <div id="board_bottom" className="clearfix">
          <Pagination />

          <div className="btn-group float-left" role="group" aria-label="First group">
            {/* <button type="button" className="btn btn-outline-dark btn-sm">글쓰기</button> */}
            <Link to="/board_create" className="btn btn-outline-dark btn-sm">글쓰기</Link>
          </div>
        </div>
        <LoaderSpinners />
      </Fragment>
    )
  }
}