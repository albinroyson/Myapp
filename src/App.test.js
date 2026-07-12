import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app welcome message', () => {
  render(<App />);
  expect(screen.getByText(/welcome to my react app/i)).toBeInTheDocument();
});
