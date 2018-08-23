import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'proptypes'

import LoaderSpinners from '../components/LoaderSpinners'

export default class ViewTable extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // }

  // path="/board_update/:id"
  componentDidMount(){
    const id = this.props.pageProps.match.params.id;
    this.props.viewCountUpdate( id );
    this.props.fetchViewData( id );
  }

  modifyEvent(){
    const id = this.props.pageProps.match.params.id;
    this.props.pageProps.history.push(`/board_update/${ id }`);
  }

  deleteEvent(){
    const id = this.props.pageProps.match.params.id;
    this.props.boardDelete(id, this.props.pageProps)
  }

  render () {
    console.log('viewTable this.props: ', this.props );
    if(this.props.loading){
      return (
        <LoaderSpinners />
      )
    }
    return (
      <Fragment>
        {
          (this.props.loading)? <LoaderSpinners /> : ''
        }
         <div id="board_content">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">작성자</th>
                <td>{ this.props.user_name }</td>
                <th>조회수</th>
                <td>{ this.props.view_count }</td>
              </tr>
              <tr>
                <th scope="row">제목</th>
                <td colSpan="3">{ this.props.title }</td>
              </tr>
              <tr>
                <th scope="row">내용</th>
                <td colSpan="3">{ this.props.content }</td>
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
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={ this.modifyEvent.bind(this) }>수정</button>
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={ this.deleteEvent.bind(this) }>삭제</button>
            </div>
          </div>
        </div>
        
      </Fragment>
    )
  }
}