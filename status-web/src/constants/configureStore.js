/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { createBrowserHistory } from 'history';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';
import storage from 'redux-persist/es/storage';
import * as reducers from '../ducks';

const config = {
  key: 'root',
  storage,
  blacklist: ['sitesState', 'detailReportState', 'siteReportState'],
};
const history = createBrowserHistory();
const rootReducer = persistCombineReducers(config, reducers);

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
const persistor = persistStore(store);
export { history, store, persistor };
