import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { InfoEpisodes } from '.';

describe('InfoEpisodes', () => {
  test('renders InfoEpisodes component', () => {
    render(<InfoEpisodes />);
    const element = screen.getByText(/InfoEpisodes/i);
    expect(element).toBeInTheDocument();
  });
});
