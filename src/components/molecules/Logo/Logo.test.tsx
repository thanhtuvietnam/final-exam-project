import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Logo } from '.';

describe('Logo', () => {
  test('renders Logo component', () => {
    render(<Logo />);
    const element = screen.getByText(/Logo/i);
    expect(element).toBeInTheDocument();
  });
});
