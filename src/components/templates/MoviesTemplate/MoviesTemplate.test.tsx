import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { MoviesTemplate } from '.';

describe('MoviesTemplate', () => {
  test('renders MoviesTemplate component', () => {
    render(<MoviesTemplate />);
    const element = screen.getByText(/MoviesTemplate/i);
    expect(element).toBeInTheDocument();
  });
});
