import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

import CreateTable from '../components/CreateTable'

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
              <legend>글쓰기</legend>
              <CreateTable />
            </fieldset>
          </form>
        </div>
        <div id="board_bottom" className="clearfix">
          <div className="float-right">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="submit" className="btn btn-outline-dark btn-sm">목록</button>
            </div>
            <div className="btn-group" role="group" aria-label="Second group">
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={ this.prevGoBack.bind(this) }>취소</button>
              <button type="submit" className="btn btn-outline-primary btn-sm ml-1">등록</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}