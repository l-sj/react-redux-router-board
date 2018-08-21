// import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux';

import LoaderSpinners from '../components/LoaderSpinners'

const mapStateToProps = (state) => {
  console.log('dddddddd------- ', this);
}
// const mapStateToProps = (state) => ({
//   state: state,
// })
const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LoaderSpinners);