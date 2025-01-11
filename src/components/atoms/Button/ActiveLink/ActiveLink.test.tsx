import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { ActiveLink } from '.';

describe('ActiveLink', () => {
  test('renders ActiveLink component', () => {
    render(<ActiveLink />);
    const element = screen.getByText(/ActiveLink/i);
    expect(element).toBeInTheDocument();
  });
});
