/* eslint-disable */
import { Provider } from 'react-redux';
import { store } from 'store/testStore';
import { UserIdContext } from 'pages/AppWrapper';

export default ({ children }) => (
  <Provider store={store}>
    <UserIdContext.Provider value={1}>{children}</UserIdContext.Provider>
  </Provider>
);
