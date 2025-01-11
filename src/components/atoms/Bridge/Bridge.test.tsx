import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Bridge } from '.';

describe('Bridge', () => {
  test('renders Bridge component', () => {
    render(<Bridge />);
    const element = screen.getByText(/Bridge/i);
    expect(element).toBeInTheDocument();
  });
});
