import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { FilmBox } from '.';

describe('FilmBox', () => {
  test('renders FilmBox component', () => {
    render(<FilmBox />);
    const element = screen.getByText(/FilmBox/i);
    expect(element).toBeInTheDocument();
  });
});
