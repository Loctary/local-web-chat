import { fork } from 'redux-saga/effects';

import messages from './messages/saga';
import users from './users/saga';

export default function* () {
  yield* [fork(messages), fork(users)];
}
