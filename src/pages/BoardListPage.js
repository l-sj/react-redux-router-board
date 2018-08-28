import React, { Fragment, Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
//const queryString = require('query-string');
import queryString from 'query-string'

// import Pagination from '../components/Pagination'
import PaginationContainer from '../containers/PaginationContainer'

// import ListTable from '../components/ListTable'
import ListTableContainer from '../containers/ListTableContainer'


export default class BoardListPage extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    // 데이터 추가 전까지 임시
    // const viewItem_ID = 'viewItem_ID'
    // localStorage.setItem(viewItem_ID, 1)
  }

  render() {
    // location.search
    console.log( 'BoardListPage Render: ', this.props );
    // var tttt = JSON.parse(this.props.history.location.search)
    let listParse = queryString.parse( this.props.history.location.search );
    let page_num = Number(listParse.pageNum);
    let page_size = Number(listParse.pageSize);
    return (
      <Fragment>
        <div id="board_list">
          {/* <ListTable /> */}
          <ListTableContainer pageProps={ this.props } paramPageNum={ page_num } paramPageSize={ page_size } />
        </div>
        <div id="board_bottom" className="clearfix">
          {/* <Pagination pageProps={ this.props } paramPageNum={ page_num } paramPageSize={ page_size } /> */}
          <PaginationContainer pageProps={ this.props } />

          <div className="btn-group float-left" role="group" aria-label="First group">
            {/* <button type="button" className="btn btn-outline-dark btn-sm">글쓰기</button> */}
            <Link to="/board_create" className="btn btn-outline-dark btn-sm">글쓰기</Link>
          </div>
        </div>
      </Fragment>
    )
  }
}