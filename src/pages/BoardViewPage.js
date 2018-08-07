import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

import BoardViewContent from '../components/BoardViewContent'

export default class BoardViewPage extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  prevGoBack() {
    this.props.history.goBack();
  }

  componentDidMount(){
    console.log('ViePage history -------: ', window.history.state);
    console.log('ViePage-------: ', window.history.state.state.id);
  }

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
              <Link to={`/board_update/${window.history.state.state.id}`} className="btn btn-outline-dark btn-sm">수정</Link>
              <button type="button" className="btn btn-outline-dark btn-sm">삭제</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}