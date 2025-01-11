import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Star } from '.';

describe('Star', () => {
  test('renders Star component', () => {
    render(<Star />);
    const element = screen.getByText(/Star/i);
    expect(element).toBeInTheDocument();
  });
});
