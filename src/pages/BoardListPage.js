import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

import Pagination from '../components/Pagination'
// import ListTable from '../components/ListTable'
import ListTableContainer from '../containers/ListTableContainer'

export default class BoardListPage extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    console.log( 'BoardListPage props :', this.props );
  }

  render() {
    // console.log('this.props.history: ', this.props.history);
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
            <button type="button" className="btn btn-outline-dark btn-sm">글쓰기</button>
          </div>
        </div>
      </Fragment>
    )
  }
}