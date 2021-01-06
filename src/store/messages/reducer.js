import { loadMessagesAction } from 'store/messages/actions';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case loadMessagesAction.success:
      return action.payload;
    default:
      return state;
  }
};

export const messagesSelector = (state) => state.messages;
