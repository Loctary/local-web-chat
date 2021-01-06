import React, { createContext, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Chat from 'pages/Chat';
import CreateUser from 'pages/CreateUser';

export const UserIdContext = createContext(null);

const App = () => {
  const [id, setId] = useState(null);
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
      <UserIdContext.Provider value={id}>{id ? <Chat /> : <CreateUser setId={setId} />}</UserIdContext.Provider>
    </ThemeProvider>
  );
};

export default App;
