import { takeEvery, put, select } from 'redux-saga/effects';
import localforage from 'localforage';
import isEqual from 'lodash/isEqual';

import * as messagesActions from 'store/messages/actions';
import { messagesSelector } from 'store/messages/reducer';

function* loadMessages() {
  try {
    const reduxMessaged = yield select(messagesSelector);
    const messages = yield localforage.getItem('messages');
    if (!messages) {
      yield localforage.setItem('messages', []);
    }

    const isMessagesEqual = isEqual(messages || [], reduxMessaged);

    if (!isMessagesEqual) {
      yield put({
        type: messagesActions.loadMessagesAction.success,
        payload: messages || [],
      });
    }
  } catch {
    yield put({ type: messagesActions.loadMessagesAction.failure });
  }
}

function* postMessage({ payload }) {
  try {
    const messages = (yield localforage.getItem('messages')) || [];
    messages.push(payload);
    yield localforage.setItem('messages', messages);
    yield put({ type: messagesActions.postMessageAction.success, payload });
    yield put(messagesActions.loadMessagesAction());
  } catch {
    yield put({ type: messagesActions.postMessageAction.failure });
  }
}

export default function* () {
  yield takeEvery(messagesActions.postMessageAction.pending, postMessage);
  yield takeEvery(messagesActions.loadMessagesAction.pending, loadMessages);
}
