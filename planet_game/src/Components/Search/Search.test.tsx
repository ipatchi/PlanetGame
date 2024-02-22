import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Searchbar Tests', () => {
  test('examines whether or not that the searchbar works as intended.', () => {
    render(
      <Search
        item_list={["Earth", "Mars", "Saturn"]}
        placeholder_text='Searching...'
        call_on_click={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole("textbox", {})).toHaveProperty('disabled', false);
  });
});
