import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { EpisodeLink } from '.';

describe('EpisodeLink', () => {
  test('renders EpisodeLink component', () => {
    render(<EpisodeLink />);
    const element = screen.getByText(/EpisodeLink/i);
    expect(element).toBeInTheDocument();
  });
});
