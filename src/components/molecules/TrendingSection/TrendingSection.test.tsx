import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { TrendingSection } from '.';

describe('TrendingSection', () => {
  test('renders TrendingSection component', () => {
    render(<TrendingSection />);
    const element = screen.getByText(/TrendingSection/i);
    expect(element).toBeInTheDocument();
  });
});
