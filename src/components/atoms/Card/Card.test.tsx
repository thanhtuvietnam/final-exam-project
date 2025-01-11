import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Card } from '.';

describe('Card', () => {
  test('renders Card component', () => {
    render(<Card />);
    const element = screen.getByText(/Card/i);
    expect(element).toBeInTheDocument();
  });
});
