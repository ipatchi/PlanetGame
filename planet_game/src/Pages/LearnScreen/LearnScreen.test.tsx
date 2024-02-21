import { render, screen } from '@testing-library/react';
import LearnScreen from './LearnScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Test LearnScreen', () => {
  test('home button exists', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LearnScreen />} />
        </Routes>
      </BrowserRouter>
    );
    expect(
      screen.getByRole('button', {
        name: /home/i,
      })
    ).toHaveProperty('disabled', false);
  });

  // #################################################### //
  //              no idea how to do this T-T              //
  // #################################################### //

  //   test('search bar exists', () => {
  //     render(
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="*" element={<LearnScreen />} />
  //         </Routes>
  //       </BrowserRouter>
  //     );
  //     expect(
  //       screen.getByRole('Search', {
  //         name: /search/i,
  //       })
  //     ).toHaveProperty('disabled', false);
  //   });
});