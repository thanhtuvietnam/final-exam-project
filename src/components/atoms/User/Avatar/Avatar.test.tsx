import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Avatar } from '.';

describe('Avatar', () => {
  test('renders Avatar component', () => {
    render(<Avatar />);
    const element = screen.getByText(/Avatar/i);
    expect(element).toBeInTheDocument();
  });
});
