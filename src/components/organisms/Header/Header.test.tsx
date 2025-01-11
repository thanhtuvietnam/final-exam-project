import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Header } from '.';

describe('Header', () => {
  test('renders Header component', () => {
    render(<Header />);
    const element = screen.getByText(/Header/i);
    expect(element).toBeInTheDocument();
  });
});
