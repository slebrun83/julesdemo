import { render, screen } from '@testing-library/react';
import App from './App';

test('renders agenda header', () => {
  render(<App />);
  const headerElements = screen.getAllByText(/Agenda/i);
  expect(headerElements.length).toBeGreaterThan(0);
});
