
import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, RouterContext } from 'react-router'
import DevTool from './DevTool'

export default class Root extends Component {
  render() {
    const { store, history, routes, type, renderProps } = this.props
    return (
      <Provider store={store}>
        <div>
          { type === 'server'
            ? <RouterContext {...renderProps} />
            : <Router history={history} routes={routes} />
          }
          <DevTool />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.node.isRequired
}
