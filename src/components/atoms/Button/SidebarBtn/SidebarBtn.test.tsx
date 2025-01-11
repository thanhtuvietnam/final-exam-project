import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SidebarBtn } from '.';

describe('SidebarBtn', () => {
  test('renders SidebarBtn component', () => {
    render(<SidebarBtn />);
    const element = screen.getByText(/SidebarBtn/i);
    expect(element).toBeInTheDocument();
  });
});
