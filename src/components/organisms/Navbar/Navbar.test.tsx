import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Navbar } from '.';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
    const element = screen.getByText(/Navbar/i);
    expect(element).toBeInTheDocument();
  });
});
