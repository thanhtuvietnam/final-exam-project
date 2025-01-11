import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { LogoImg } from '.';

describe('LogoImg', () => {
  test('renders LogoImg component', () => {
    render(<LogoImg />);
    const element = screen.getByText(/LogoImg/i);
    expect(element).toBeInTheDocument();
  });
});
