import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { BorderEffect } from '.';

describe('BorderEffect', () => {
  test('renders BorderEffect component', () => {
    render(<BorderEffect />);
    const element = screen.getByText(/BorderEffect/i);
    expect(element).toBeInTheDocument();
  });
});
