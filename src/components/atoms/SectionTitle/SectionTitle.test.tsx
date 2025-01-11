import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SectionTitle } from '.';

describe('SectionTitle', () => {
  test('renders SectionTitle component', () => {
    render(<SectionTitle />);
    const element = screen.getByText(/SectionTitle/i);
    expect(element).toBeInTheDocument();
  });
});
