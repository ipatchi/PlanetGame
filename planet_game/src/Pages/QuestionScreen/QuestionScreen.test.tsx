import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import QuestionScreen from './QuestionScreen';

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
  test('loading bar exists if not attached to API', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<QuestionScreen />} />
        </Routes>
      </BrowserRouter>
    );
    expect(await screen.findByText(/loading.../i)).toBeTruthy();
  });
  // test if the buttons have the answers in them (mock another API call)
  // test if the question can take different planet names and attributes
});
