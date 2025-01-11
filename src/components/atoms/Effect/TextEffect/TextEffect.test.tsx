import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { TextEffect } from '.';

describe('TextEffect', () => {
  test('renders TextEffect component', () => {
    render(<TextEffect />);
    const element = screen.getByText(/TextEffect/i);
    expect(element).toBeInTheDocument();
  });
});
