import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Cursor } from '.';

describe('Cursor', () => {
  test('renders Cursor component', () => {
    render(<Cursor />);
    const element = screen.getByText(/Cursor/i);
    expect(element).toBeInTheDocument();
  });
});
