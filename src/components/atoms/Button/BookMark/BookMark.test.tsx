import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { BookMark } from '.';

describe('BookMark', () => {
  test('renders BookMark component', () => {
    render(<BookMark />);
    const element = screen.getByText(/BookMark/i);
    expect(element).toBeInTheDocument();
  });
});
