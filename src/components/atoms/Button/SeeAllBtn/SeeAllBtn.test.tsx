import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SeeAllBtn } from '.';

describe('SeeAllBtn', () => {
  test('renders SeeAllBtn component', () => {
    render(<SeeAllBtn />);
    const element = screen.getByText(/SeeAllBtn/i);
    expect(element).toBeInTheDocument();
  });
});
