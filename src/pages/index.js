import React from 'react';
import { Provider } from 'react-redux';

import AppWrapper from 'pages/AppWrapper';

import { store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};

export default App;
