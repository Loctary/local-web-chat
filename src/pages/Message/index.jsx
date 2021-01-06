import React, { useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { UserIdContext } from 'pages/AppWrapper';
import { usersSelector } from 'store/users/reducer';

import { useStyles } from './styles';

const Message = ({ message: { createdBy, message }, isFirstMessage, isLastMessage }) => {
  const id = useContext(UserIdContext);
  const users = useSelector(usersSelector);
  const isMine = createdBy === id;
  const classes = useStyles({ isMine, isLastMessage });

  const user = useMemo(() => users.find(({ id }) => id === createdBy), [users]);

  return (
    <div className={classes.root}>
      {isFirstMessage && (
        <div className={classes.username}>
          <div className={classes.iconPlaceholder} />
          <Typography variant="body2">{user && user.username}</Typography>
        </div>
      )}

      <div className={classes.container}>
        <div className={classes.message}>
          <Typography style={{ wordWrap: 'break-all' }}>{message}</Typography>
        </div>
        <div className={classes.iconPlaceholder}>
          {isLastMessage && <AccountCircle color={isMine ? 'primary' : 'secondary'} fontSize="large" />}
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    createdBy: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
  }).isRequired,
  isFirstMessage: PropTypes.bool.isRequired,
  isLastMessage: PropTypes.bool.isRequired,
};

export default React.memo(Message);
