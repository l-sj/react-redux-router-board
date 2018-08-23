import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom'

// import CreateTable from '../components/CreateTable'
import CreateTableContainer from '../containers/CreateTableContainer'

export default class BoardCreatePage extends Component {

  render() {
    console.log('this.props.history: ', this.props.history);
    return (
      <Fragment>
        <CreateTableContainer pageProps={ this.props }/>
      </Fragment>
    )
  }
}