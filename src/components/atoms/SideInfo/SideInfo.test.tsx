import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SideInfo } from '.';

describe('SideInfo', () => {
  test('renders SideInfo component', () => {
    render(<SideInfo />);
    const element = screen.getByText(/SideInfo/i);
    expect(element).toBeInTheDocument();
  });
});
