import { asyncAction } from 'lib/actions';

export const postMessageAction = asyncAction('messages/POST_MESSAGE');
export const loadMessagesAction = asyncAction('messages/LOAD_MESSAGES');
