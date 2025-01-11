import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { ProfileSubmenu } from '.';

describe('ProfileSubmenu', () => {
  test('renders ProfileSubmenu component', () => {
    render(<ProfileSubmenu />);
    const element = screen.getByText(/ProfileSubmenu/i);
    expect(element).toBeInTheDocument();
  });
});
