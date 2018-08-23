import React, { Fragment, Component } from 'react';

// import ViewTable from '../components/ViewTable'
import ViewTableContainer from '../containers/ViewTableContainer'

export default class BoardViewPage extends Component {
  render() {
    console.log('ViewPage: ', this );
    console.log('ViewPage this.props: ', this.props );
    // console.log('ViewPage this.props.match.params.id: ', this.props.match.params.id );
    // console.log('ViewPage this.context.router.route.match.params.id: ', this.context.router.route.match.params.id );
    return (
      <Fragment>
        <ViewTableContainer pageProps={ this.props } />
      </Fragment>
    )
  }
}