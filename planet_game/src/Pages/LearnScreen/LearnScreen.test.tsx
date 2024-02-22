import { render, screen } from '@testing-library/react';
import LearnScreen from './LearnScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('http://localhost:8080/planet', (_req, res, ctx) =>
    res(ctx.json<string[]>(['Saturn', 'Earth']))
  ),
  rest.get('http://localhost:8080/headers', (_req, res, ctx) =>
    res(ctx.json<string[]>(['big', 'round']))
  ),
  rest.post('http://localhost:8080/planet/search', (_req, res, ctx) =>
    res(ctx.json<string>('2'))
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

  test('loading bar exists if not attached to API', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LearnScreen />} />
        </Routes>
      </BrowserRouter>
    );
    expect(await screen.findByText(/loading.../i)).toBeTruthy();
  });

  // This needs the API to work
  test('searchbar exists', async () => {
    // mock an api call

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