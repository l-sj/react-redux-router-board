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
/*
replaceReducer(nextReducer)
  현재 스토어에서 상태를 계산하기 위해 사용중인 리듀서를 교체한다.
  이것은 고급 API로 코드 분할이나 동적으로 리듀서를 불러오고 싶을때 사용할 수 있다.
  Redux에서 핫 리로딩을 구현하기 위해서도 사용할 수 있다.
  전달인자
    reducer:(Function)스토어가 앞으로 사용할 리듀서
*/

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
        
        <Route exact path="/" render={(props) => (
          <BoardListPage {...props} />
        )} />
        <Route path="/board_create" render={(props) => (
          <BoardCreatePage {...props} />
        )} />
        <Route path="/board_view/:id" render={(props) => (
          <BoardViewPage {...props} />
        )} />
        <Route path="/board_update/:id" render={(props) => (
          <BoardUpdatePage {...props} />
        )} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('wrapper')
);