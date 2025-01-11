import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { InfoFilmTemplate } from '.';

describe('InfoFilmTemplate', () => {
  test('renders InfoFilmTemplate component', () => {
    render(<InfoFilmTemplate />);
    const element = screen.getByText(/InfoFilmTemplate/i);
    expect(element).toBeInTheDocument();
  });
});
