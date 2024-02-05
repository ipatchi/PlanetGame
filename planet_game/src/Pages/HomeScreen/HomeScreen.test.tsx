import { render } from '@testing-library/react';
import HomeScreen from './HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Landing page test', () => {
  test('renders the landing page', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    );
  });
});
