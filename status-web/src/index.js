import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/es/integration/react';
import { createGlobalStyle } from 'styled-components';

// Using connected-react-router instead of react-router-redux because time travel debugging did not work in the latter,
// consider switching to the other package if this gets outdated and/or connected-react-router works..
import {
  ConnectedRouter,
} from 'connected-react-router';

import { store, persistor, history } from './constants/configureStore';
import './i18n';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    display: flex;
    line-height: normal;
  }

  #root {
    width: 100%;
    line-height: normal;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <Suspense fallback="loading...">
            <App />
          </Suspense>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </React.Fragment>,
  document.getElementById('root'),
);

unregister();
