import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Filter } from '.';

describe('Filter', () => {
  test('renders Filter component', () => {
    render(<Filter />);
    const element = screen.getByText(/Filter/i);
    expect(element).toBeInTheDocument();
  });
});
