import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { PageController } from '.';

describe('PageController', () => {
  test('renders PageController component', () => {
    render(<PageController />);
    const element = screen.getByText(/PageController/i);
    expect(element).toBeInTheDocument();
  });
});
