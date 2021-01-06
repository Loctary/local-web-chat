import { render, fireEvent, waitFor } from '@testing-library/react';
import localforage from 'localforage';

import TestProvider from 'utils/testProvider';
import Chat from './index';

const TEST_MESSAGE_TEXT = 'test message';

test('sent message saves to indexed db', async () => {
  const { findByTestId } = render(
    <TestProvider>
      <Chat />
    </TestProvider>,
  );
  const input = await findByTestId('message-input');
  await fireEvent.change(input, { target: { value: TEST_MESSAGE_TEXT } });
  const button = await findByTestId('message-submit');
  await fireEvent.click(button);
  await waitFor(() => {}, { timeout: 100 });
  const messages = await localforage.getItem('messages');
  const message = messages.find((msg) => msg && msg.message === TEST_MESSAGE_TEXT);
  expect(message && message.message).toBe(TEST_MESSAGE_TEXT);
});
