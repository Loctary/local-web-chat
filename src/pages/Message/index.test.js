import { render, screen } from '@testing-library/react';

import TestProvider from 'utils/testProvider';
import Message from './index';

test('renders message', () => {
  render(
    <TestProvider>
      <Message isFirstMessage isLastMessage message={{ createdBy: 1, message: 'test message', timestamp: 123 }} />
    </TestProvider>,
  );
  const messageText = screen.getByText(/test message/i);
  expect(messageText).toBeInTheDocument();
});
