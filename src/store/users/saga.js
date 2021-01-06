import { takeEvery, put } from 'redux-saga/effects';
import localforage from 'localforage';

import * as usersActions from 'store/users/actions';
import * as messagesActions from 'store/messages/actions';

function* createNewUser({ payload }) {
  try {
    const { user, users } = payload;
    yield localforage.setItem('users', users.concat(user));
    yield put({ type: usersActions.createUserAction.success, payload: users.concat(user) });
    yield put({ type: messagesActions.loadMessagesAction.pending });
  } catch {
    yield put({ type: usersActions.createUserAction.failure });
  }
}

export default function* () {
  yield takeEvery(usersActions.createUserAction.pending, createNewUser);
}
