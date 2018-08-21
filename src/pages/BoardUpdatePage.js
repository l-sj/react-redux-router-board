import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

// import UpdateTable from '../components/UpdateTable'
import UpdateTableContainer from '../containers/UpdateTableContainer'

export default class BoardUpdatePage extends Component {
  // prevGoBack() {
  //   this.props.history.goBack();
  // }

  componentDidMount(){
    // console.log('this.props.location: ', this.props.location);
  }

  // modifyFunc(){
  //   console.log( 'BoardUpdatePage : ', localStorage.getItem('tempTitle') );
  //   localStorage.removeItem('tempTitle');
  // }

  render() {
    // console.log('this.props.history: ', this.props.history);
   
    return (
      <Fragment>
        <UpdateTableContainer pageProps={ this.props } />
      </Fragment>
    )
  }
}