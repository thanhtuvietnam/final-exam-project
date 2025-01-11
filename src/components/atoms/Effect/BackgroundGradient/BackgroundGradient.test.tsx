import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { BackgroundGradient } from '.';

describe('BackgroundGradient', () => {
  test('renders BackgroundGradient component', () => {
    render(<BackgroundGradient />);
    const element = screen.getByText(/BackgroundGradient/i);
    expect(element).toBeInTheDocument();
  });
});
