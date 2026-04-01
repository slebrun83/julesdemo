import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders agenda header', () => {
  render(<App />);
  const headerElements = screen.getAllByText(/Official Agenda/i);
  expect(headerElements.length).toBeGreaterThan(0);
});

test('can send a chat message', () => {
  render(<App />);
  const nameInput = screen.getByPlaceholderText(/Developer name.../i);
  const messageInput = screen.getByPlaceholderText(/What's on your mind\?/i);
  const sendButton = screen.getByRole('button', { name: /Send Message/i });

  fireEvent.change(nameInput, { target: { value: 'Test User' } });
  fireEvent.change(messageInput, { target: { value: 'Test Message' } });
  fireEvent.click(sendButton);

  expect(screen.getByText('Test User')).toBeInTheDocument();
  expect(screen.getByText('Test Message')).toBeInTheDocument();
});

test('toggles share modal', () => {
  render(<App />);
  const shareButton = screen.getByRole('button', { name: /share/i });
  fireEvent.click(shareButton);

  expect(screen.getByText(/Share Companion/i)).toBeInTheDocument();

  const closeButton = screen.getByRole('button', { name: /close/i });
  fireEvent.click(closeButton);

  expect(screen.queryByText(/Share Companion/i)).not.toBeInTheDocument();
});
