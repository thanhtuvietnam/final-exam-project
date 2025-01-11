import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { FilmSections } from '.';

describe('FilmSections', () => {
  test('renders FilmSections component', () => {
    render(<FilmSections />);
    const element = screen.getByText(/FilmSections/i);
    expect(element).toBeInTheDocument();
  });
});
