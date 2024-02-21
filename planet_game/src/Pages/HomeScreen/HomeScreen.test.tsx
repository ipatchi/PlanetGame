import { render, screen } from '@testing-library/react';
import HomeScreen from './HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Button tests', () => {
  test('renders the landing page', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    );
    expect(
      screen.getByRole('button', {
        name: /start/i,
      })
    ).toHaveProperty('disabled', false);
  });
});
