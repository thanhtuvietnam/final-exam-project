import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SectionCards } from '.';

describe('SectionCards', () => {
  test('renders SectionCards component', () => {
    render(<SectionCards />);
    const element = screen.getByText(/SectionCards/i);
    expect(element).toBeInTheDocument();
  });
});
