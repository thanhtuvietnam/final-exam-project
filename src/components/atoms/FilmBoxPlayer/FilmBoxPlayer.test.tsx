import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { FilmBoxPlayer } from '.';

describe('FilmBoxPlayer', () => {
  test('renders FilmBoxPlayer component', () => {
    render(<FilmBoxPlayer />);
    const element = screen.getByText(/FilmBoxPlayer/i);
    expect(element).toBeInTheDocument();
  });
});
