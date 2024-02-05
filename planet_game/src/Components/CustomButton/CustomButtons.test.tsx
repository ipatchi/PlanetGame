import { render, screen } from '@testing-library/react';
import CustomButton from './CustomButton';

describe('Button test', () => {
  test('tests the button works', () => {
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
