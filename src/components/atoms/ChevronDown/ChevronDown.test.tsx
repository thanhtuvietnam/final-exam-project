import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { ChevronDown } from '.';

describe('ChevronDown', () => {
  test('renders ChevronDown component', () => {
    render(<ChevronDown />);
    const element = screen.getByText(/ChevronDown/i);
    expect(element).toBeInTheDocument();
  });
});
