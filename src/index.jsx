import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from 'store/configureStore';
import App from 'containers/App';

import './styles/app.css';

const browserHistory = createBrowserHistory();
const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
