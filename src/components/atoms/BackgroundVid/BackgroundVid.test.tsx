import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { BackgroundVid } from '.';

describe('BackgroundVid', () => {
  test('renders BackgroundVid component', () => {
    render(<BackgroundVid />);
    const element = screen.getByText(/BackgroundVid/i);
    expect(element).toBeInTheDocument();
  });
});
