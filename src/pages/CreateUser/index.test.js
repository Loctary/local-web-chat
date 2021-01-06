import { render, fireEvent, waitFor } from '@testing-library/react';

import TestProvider from 'utils/testProvider';
import CreateUser from './index';

const USERNAME = 'username';

test('sets user id', async () => {
  const setId = jest.fn();
  const { findByTestId } = render(
    <TestProvider>
      <CreateUser setId={setId} />
    </TestProvider>,
  );
  const input = await findByTestId('username-input');
  await fireEvent.change(input, { target: { value: USERNAME } });
  const button = await findByTestId('username-submit');
  await fireEvent.click(button);
  await waitFor(() => {}, { timeout: 100 });
  expect(setId).toHaveBeenCalledTimes(1);
  expect(setId).toHaveBeenCalledWith(1);
});
