import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { ArrowBtn } from '.';

describe('ArrowBtn', () => {
  test('renders ArrowBtn component', () => {
    render(<ArrowBtn />);
    const element = screen.getByText(/ArrowBtn/i);
    expect(element).toBeInTheDocument();
  });
});
