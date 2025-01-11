import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { FilmWatchSection } from '.';

describe('FilmWatchSection', () => {
  test('renders FilmWatchSection component', () => {
    render(<FilmWatchSection />);
    const element = screen.getByText(/FilmWatchSection/i);
    expect(element).toBeInTheDocument();
  });
});
