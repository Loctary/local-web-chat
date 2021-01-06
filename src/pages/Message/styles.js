import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  username: ({ isMine }) => ({
    display: 'flex',
    height: '25px !important',
    flexDirection: isMine ? 'row-reverse' : 'row',
    position: 'relative',
    top: 5,
    '& p': {
      padding: '0 .5rem',
      color: '#41b3a3',
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  }),
  container: ({ isMine }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: isMine ? 'row' : 'row-reverse',
  }),
  message: ({ isMine, isLastMessage }) => ({
    position: 'relative',
    borderRadius: '.75rem',
    padding: '.25rem .5rem',
    wordBreak: 'break-word',
    flex: '1 10px',
    maxWidth: 'fit-content',
    backgroundColor: isMine ? '#3f51b5' : '#c5cbe3',
    color: '#fff',
    '&:before': {
      display: isLastMessage ? 'block' : 'none',
      content: `''`,
      position: 'absolute',
      left: isMine ? undefined : 0,
      right: isMine ? 0 : undefined,
      bottom: 0,
      width: '.75rem',
      height: '.75rem',
      zIndex: -1,
      backgroundColor: isMine ? '#3f51b5' : '#c5cbe3',
    },
  }),
  iconPlaceholder: {
    alignSelf: 'flex-end',
    flex: '0 35px',
    width: 35,
    height: 35,
  },
});
