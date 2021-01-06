import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import localforage from 'localforage';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core';

import { createUserAction } from 'store/users/actions';

import { useStyles } from './styles';

const getUsers = async () => {
  const users = await localforage.getItem('users');
  if (!users) {
    await localforage.setItem('users', []);
  }
  return users || [];
};

const CreateUser = ({ setId }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    const users = await getUsers();
    const id = Math.max(0, ...users.map(({ id }) => id)) + 1;
    setId(id);
    dispatch(createUserAction({ users, user: { username, id } }));
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={onSubmit} className={classes.form}>
        <TextField
          required
          inputProps={{
            'data-testid': 'username-input',
          }}
          autoFocus
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          disabled={!username}
          data-testid="username-submit"
          size="large"
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          className={classes.button}
        >
          Enter chat
        </Button>
      </form>
    </div>
  );
};

CreateUser.propTypes = {
  setId: PropTypes.func,
};

export default CreateUser;
