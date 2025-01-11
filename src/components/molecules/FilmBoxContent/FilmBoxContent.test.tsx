import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { FilmBoxContent } from '.';

describe('FilmBoxContent', () => {
  test('renders FilmBoxContent component', () => {
    render(<FilmBoxContent />);
    const element = screen.getByText(/FilmBoxContent/i);
    expect(element).toBeInTheDocument();
  });
});
