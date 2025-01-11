import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { RecommendMovies } from '.';

describe('RecommendMovies', () => {
  test('renders RecommendMovies component', () => {
    render(<RecommendMovies />);
    const element = screen.getByText(/RecommendMovies/i);
    expect(element).toBeInTheDocument();
  });
});
