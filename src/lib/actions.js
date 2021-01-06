export const SUFFIXES = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

const defaultActionMaker = (type, payload) => ({ type, payload });

export function asyncAction(base) {
  const actionCreator = (payload) => defaultActionMaker(`${base}/${SUFFIXES.PENDING}`, payload);

  actionCreator.type = base;
  actionCreator.pending = `${base}/${SUFFIXES.PENDING}`;
  actionCreator.success = `${base}/${SUFFIXES.SUCCESS}`;
  actionCreator.failure = `${base}/${SUFFIXES.FAILURE}`;
  return actionCreator;
}

export function syncAction(base) {
  const actionCreator = (payload) => defaultActionMaker(base, payload);

  actionCreator.type = base;
  return actionCreator;
}
