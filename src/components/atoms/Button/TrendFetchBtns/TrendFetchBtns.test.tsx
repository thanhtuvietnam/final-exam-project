import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { TrendFetchBtns } from '.';

describe('TrendFetchBtns', () => {
  test('renders TrendFetchBtns component', () => {
    render(<TrendFetchBtns />);
    const element = screen.getByText(/TrendFetchBtns/i);
    expect(element).toBeInTheDocument();
  });
});
