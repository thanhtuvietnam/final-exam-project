import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { LoginBtn } from '.';

describe('LoginBtn', () => {
  test('renders LoginBtn component', () => {
    render(<LoginBtn />);
    const element = screen.getByText(/LoginBtn/i);
    expect(element).toBeInTheDocument();
  });
});
