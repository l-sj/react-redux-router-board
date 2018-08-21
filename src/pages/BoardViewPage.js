import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'proptypes'

// import ViewTable from '../components/ViewTable'
import ViewTableContainer from '../containers/ViewTableContainer'

export default class BoardViewPage extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  // path="/board_update/:id"
  modifyEvent(){
    let id = this.props.match.params.id;
    this.props.history.push(`/board_update/${id}`);
  }

  render() {
    console.log('ViewPage: ', this );
    console.log('ViewPage this.props: ', this.props );
    // console.log('ViewPage this.props.match.params.id: ', this.props.match.params.id );
    // console.log('ViewPage this.context.router.route.match.params.id: ', this.context.router.route.match.params.id );
    return (
      <Fragment>
        <div id="board_content">
          {/* <ViewTable /> */}
          <ViewTableContainer id={ this.props.match.params.id } />
        </div>
        <div id="board_bottom" className="clearfix">
          <div className="float-right">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              {/* <button type="button" className="btn btn-outline-dark btn-sm">목록</button> */}
              {/* <button type="button" className="btn btn-outline-dark btn-sm" onClick={ this.context.router.history.goBack }>목록</button> */}
              <Link to="/" className="btn btn-outline-dark btn-sm">목록</Link>
            </div>
            <div className="btn-group" role="group" aria-label="Second group">
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={ this.modifyEvent.bind(this) }>수정</button>
              <button type="button" className="btn btn-outline-dark btn-sm">삭제</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}