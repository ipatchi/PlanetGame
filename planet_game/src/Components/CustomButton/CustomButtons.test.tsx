import { render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

describe('Button Tests', () => {
  test('A test to examine whether or not that the button works as intended.', () => {
    render(
      <CustomButton
        type={''}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('button', {})).toHaveProperty('disabled', false);
  });
});
