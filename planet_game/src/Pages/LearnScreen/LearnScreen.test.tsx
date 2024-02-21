import { render, screen } from '@testing-library/react';
import LearnScreen from './LearnScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { vi } from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get("http://localhost:8080/planet", (_req, res, ctx) =>
    res(
      ctx.json<string[]>(
        ["Saturn", "Earth"]
      )
    )
  )
);

describe('Test LearnScreen', () => {
  beforeAll(() => {
    server.listen();
  });
  // afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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
  //                                                      //
  //      This should be the same thing as the button     //
  //        but it doesn't recognise the .getByRole       //
  // #################################################### //

  test.only('loading bar exists if not attached to API', async() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LearnScreen />} />
        </Routes>
      </BrowserRouter>
    );
    expect(
      await screen.findByText(/loading.../i)).toBeTruthy();
  });

  test('searchbar exists', async () => {
    // mock an api call
    vi.mock('../../API/getPlanetNames');

    
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LearnScreen />} />
        </Routes>
      </BrowserRouter>
    );
    // expect(await screen.getByText(/saturn/i));
  });
  // add test for planet attributes being displayed
});