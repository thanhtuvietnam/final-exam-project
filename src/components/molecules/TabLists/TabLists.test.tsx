import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { TabLists } from '.';

describe('TabLists', () => {
  test('renders TabLists component', () => {
    render(<TabLists />);
    const element = screen.getByText(/TabLists/i);
    expect(element).toBeInTheDocument();
  });
});
