import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Sidebar } from '.';

describe('Sidebar', () => {
  test('renders Sidebar component', () => {
    render(<Sidebar />);
    const element = screen.getByText(/Sidebar/i);
    expect(element).toBeInTheDocument();
  });
});
