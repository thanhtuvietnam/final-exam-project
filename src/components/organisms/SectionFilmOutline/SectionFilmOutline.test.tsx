import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SectionFilmOutline } from '.';

describe('SectionFilmOutline', () => {
  test('renders SectionFilmOutline component', () => {
    render(<SectionFilmOutline />);
    const element = screen.getByText(/SectionFilmOutline/i);
    expect(element).toBeInTheDocument();
  });
});
