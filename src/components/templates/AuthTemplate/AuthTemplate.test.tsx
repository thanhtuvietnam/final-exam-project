import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { AuthTemplate } from '.';

describe('AuthTemplate', () => {
  test('renders AuthTemplate component', () => {
    render(<AuthTemplate />);
    const element = screen.getByText(/AuthTemplate/i);
    expect(element).toBeInTheDocument();
  });
});
