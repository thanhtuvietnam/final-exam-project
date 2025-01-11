import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SocialContact } from '.';

describe('SocialContact', () => {
  test('renders SocialContact component', () => {
    render(<SocialContact />);
    const element = screen.getByText(/SocialContact/i);
    expect(element).toBeInTheDocument();
  });
});
