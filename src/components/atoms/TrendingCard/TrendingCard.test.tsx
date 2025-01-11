import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { TrendingCard } from '.';

describe('TrendingCard', () => {
  test('renders TrendingCard component', () => {
    render(<TrendingCard />);
    const element = screen.getByText(/TrendingCard/i);
    expect(element).toBeInTheDocument();
  });
});
