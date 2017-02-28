
import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css'
import { history } from './services'
import {user} from './actions'
import jwtDecode from 'jwt-decode'

import configureStore from './store/configureStore'
import routes from './routes/routes'
import Root from './containers/Root'
import rootSaga from './sagas'

const store = configureStore(window.__INITIAL_STATE__)

store.runSaga(rootSaga)

let rootElement = document.getElementById('app')
if (localStorage.jwtToken) {
  store.dispatch(user.setCurrentUser(jwtDecode(localStorage.jwtToken)));
}
render(
  <Root
    store={store}
    history={history}
    routes={routes} />,
  rootElement
)
