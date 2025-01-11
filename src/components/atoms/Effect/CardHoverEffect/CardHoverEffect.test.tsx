import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { CardHoverEffect } from '.';

describe('CardHoverEffect', () => {
  test('renders CardHoverEffect component', () => {
    render(<CardHoverEffect />);
    const element = screen.getByText(/CardHoverEffect/i);
    expect(element).toBeInTheDocument();
  });
});
