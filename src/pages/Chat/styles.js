import { makeStyles } from '@material-ui/core';

const MESSAGES_PADDING = 5;

export const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  appBar: {
    borderTop: '1px solid rgba(0, 0, 0, .12)',
    backgroundColor: '#fafafa',
    position: 'fixed',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '450px',
    bottom: 0,
  },
  messages: {
    margin: '0 1rem',
    paddingBottom: 56 + MESSAGES_PADDING,
    scrollBehavior: 'smooth',
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      paddingBottom: 48 + MESSAGES_PADDING,
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 64 + MESSAGES_PADDING,
    },
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    marginLeft: '.5rem',
  },
}));
