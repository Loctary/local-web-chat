import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import users from 'store/users/reducer';
import messages from 'store/messages/reducer';

import rootSaga from 'store/sagas';
const rootReducer = combineReducers({
  users,
  messages,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
