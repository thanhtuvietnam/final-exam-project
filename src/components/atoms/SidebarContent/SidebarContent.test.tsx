import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SidebarContent } from '.';

describe('SidebarContent', () => {
  test('renders SidebarContent component', () => {
    render(<SidebarContent />);
    const element = screen.getByText(/SidebarContent/i);
    expect(element).toBeInTheDocument();
  });
});
