import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SubmenuLists } from '.';

describe('SubmenuLists', () => {
  test('renders SubmenuLists component', () => {
    render(<SubmenuLists />);
    const element = screen.getByText(/SubmenuLists/i);
    expect(element).toBeInTheDocument();
  });
});
