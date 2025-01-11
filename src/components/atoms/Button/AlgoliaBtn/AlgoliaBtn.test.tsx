import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { AlgoliaBtn } from '.';

describe('AlgoliaBtn', () => {
  test('renders AlgoliaBtn component', () => {
    render(<AlgoliaBtn />);
    const element = screen.getByText(/AlgoliaBtn/i);
    expect(element).toBeInTheDocument();
  });
});
