import { render, screen } from '@testing-library/react';
import HomeScreen from './HomeScreen';

test('renders the landing page', () => {
  render(<HomeScreen />);
  expect(screen.getByRole('NavBar')).toHaveTextContent(/Planet Game/);
  expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
});
