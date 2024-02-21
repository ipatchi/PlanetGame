import { render, screen } from '@testing-library/react';
import HomeScreen from './HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Test Homescreen', () => {
  test('start button exists', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    );
    expect(
      screen.getByRole('button', {
        // checks that the text inside the button is what it says
        name: /start/i,
      })
    ).toHaveProperty('disabled', false);
  });

  test('learn button exists', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    );
    expect(
      screen.getByRole('button', {
        name: /learn/i,
      })
    ).toHaveProperty('disabled', false);
  });
});