import { createStore, applyMiddleware, combineReducers } from 'redux';
import {
  createStateSyncMiddleware,
  initMessageListener,
  withReduxStateSync,
  initStateWithPrevTab,
} from 'redux-state-sync';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import users from './users/reducer';
import messages from './messages/reducer';

import rootSaga from './sagas';
import { loadMessagesAction, postMessageAction } from 'store/messages/actions';
import { createUserAction } from 'store/users/actions';

const rootReducer = withReduxStateSync(
  combineReducers({
    users,
    messages,
  }),
);

const config = {
  // these actions will not be triggered in other tabs
  blacklist: [postMessageAction.pending, loadMessagesAction.pending, createUserAction.pending],
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [createStateSyncMiddleware(config), sagaMiddleware];

export const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

initMessageListener(store);
initStateWithPrevTab(store);
