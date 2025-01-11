import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Tabs } from '.';

describe('Tabs', () => {
  test('renders Tabs component', () => {
    render(<Tabs />);
    const element = screen.getByText(/Tabs/i);
    expect(element).toBeInTheDocument();
  });
});
