import { render, screen } from '@testing-library/react';
import QuestionScreen from "./QuestionScreen"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Test QuestionScreen', () => {
  test('home button exists', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<QuestionScreen />} />
        </Routes>
      </BrowserRouter>
    );
    expect(
      screen.getByRole('button', {
        name: /home/i,
      })
    ).toHaveProperty('disabled', false);
  });
});
