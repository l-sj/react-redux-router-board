import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter, Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import 'bootstrap';
import '../public/scss/custom.scss';

// console.log('process: ', process);

import BoardListPage from './pages/BoardListPage'
import BoardViewPage from './pages/BoardViewPage'
import BoardCreatePage from './pages/BoardCreatePage'
import BoardUpdatePage from './pages/BoardUpdatePage'
import App from './App';

import rootReducer from './reducers';

const store = createStore(rootReducer);

// console.log('module: ', module);
// console.log('module.hot', module.hot);

if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers'))
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* <App>
          <Route exact path='/' component={ BoardListPage } />
          <Route path='/board_view' component={ BoardViewPage } />
          <Route path='/board_create' component={ BoardCreatePage} />
          <Route path='/board_update' component={ BoardUpdatePage } />
        </App> */}
        <Route exact path="/" component={ BoardListPage } />
        <Route path="/board_view" component={ BoardViewPage } />
        <Route path="/board_create" render={(props) => (
          <BoardCreatePage {...props} />
        )} />
        <Route path="/board_update" render={(props) => (
          <BoardUpdatePage {...props} />
        )} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('wrapper')
);