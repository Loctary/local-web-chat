import React, { useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Toolbar, TextField, IconButton, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';

import { UserIdContext } from 'pages/AppWrapper';
import Message from 'pages/Message';

import { postMessageAction } from 'store/messages/actions';
import { messagesSelector } from 'store/messages/reducer';

import { useStyles } from './styles';

const Chat = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [loaded, setLoaded] = useState(-1);
  const chatBottomRef = useRef(null);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  const messages = useSelector(messagesSelector);
  const id = useContext(UserIdContext);

  const classes = useStyles();

  const loadMore = () => {
    setLoaded((prevState) => {
      const loadedMessagesCount = prevState + 25;
      return loadedMessages <= messages.length ? loadedMessagesCount : messages.length;
    });
  };

  const scrollToBottom = () =>
    chatBottomRef.current && chatBottomRef.current.scrollIntoView && chatBottomRef.current.scrollIntoView();

  const onSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(postMessageAction({ createdBy: id, message, timestamp: new Date().getTime() }));
    }
    scrollToBottom();
    setMessage('');
    inputRef.current.focus();
  };

  useLayoutEffect(() => {
    if (messages) {
      if (window.innerHeight - messagesRef.current.getBoundingClientRect().bottom >= -125) {
        scrollToBottom();
      }
      setLoaded((prevState) => prevState + 1);
    }
  }, [messages]);

  const loadedMessages = useMemo(() => (loaded > 0 ? (messages || []).slice(-loaded) : []), [messages, loaded]);

  return (
    <div className={classes.container}>
      {messages && loaded < messages.length && (
        <Button fullWidth type="button" onClick={loadMore}>
          Load more
        </Button>
      )}

      <div className={classes.messages} ref={messagesRef}>
        {loadedMessages.map((message, ix) => (
          <Message
            key={`by-${message.createdBy}-at-${message.timestamp}`}
            message={message}
            isLastMessage={loadedMessages[ix + 1] ? loadedMessages[ix + 1].createdBy !== message.createdBy : true}
            isFirstMessage={loadedMessages[ix - 1] ? loadedMessages[ix - 1].createdBy !== message.createdBy : true}
          />
        ))}
      </div>
      <div ref={chatBottomRef} />

      <Toolbar position="static" className={classes.appBar}>
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <TextField
            inputProps={{
              'data-testid': 'message-input',
            }}
            autoFocus
            inputRef={inputRef}
            placeholder="Message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <IconButton data-testid="message-submit" type="submit" className={classes.button}>
            <Send />
          </IconButton>
        </form>
      </Toolbar>
    </div>
  );
};

export default Chat;
