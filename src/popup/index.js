import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import createBrowserHistory from 'history/createBrowserHistory';

import './sass/popup.sass';
import App from './js/containers/App.jsx';

// const browserHistory = createBrowserHistory();

const proxyStore = new Store({
  portName: 'linkedin-toolkit'
});

// const history = syncHistoryWithStore(browserHistory, proxyStore)

proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <App />
    </Provider>,
    document.getElementById('react-root')
  );
});
