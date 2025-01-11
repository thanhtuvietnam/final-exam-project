import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Footer } from '.';

describe('Footer', () => {
  test('renders Footer component', () => {
    render(<Footer />);
    const element = screen.getByText(/Footer/i);
    expect(element).toBeInTheDocument();
  });
});
