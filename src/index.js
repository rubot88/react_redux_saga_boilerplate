import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

import history from "./history"
import { Provider } from 'react-redux'
import store from './store/index'
import App from './App'
import * as constants from './constants/global'
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById(constants.ROOT_COMPONENT)
)

serviceWorker.unregister()
