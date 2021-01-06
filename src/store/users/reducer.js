import { createUserAction } from 'store/users/actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case createUserAction.success:
      return action.payload;
    default:
      return state;
  }
};

export const usersSelector = (state) => state.users;
