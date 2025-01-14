import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Scroll } from '.';

describe('Scroll', () => {
  test('renders Scroll component', () => {
    render(<Scroll />);
    const element = screen.getByText(/Scroll/i);
    expect(element).toBeInTheDocument();
  });
});
