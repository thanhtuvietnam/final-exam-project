import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { UserLogin } from '.';

describe('UserLogin', () => {
  test('renders UserLogin component', () => {
    render(<UserLogin />);
    const element = screen.getByText(/UserLogin/i);
    expect(element).toBeInTheDocument();
  });
});
