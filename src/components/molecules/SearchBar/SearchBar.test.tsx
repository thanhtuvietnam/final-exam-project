import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SearchBar } from '.';

describe('SearchBar', () => {
  test('renders SearchBar component', () => {
    render(<SearchBar />);
    const element = screen.getByText(/SearchBar/i);
    expect(element).toBeInTheDocument();
  });
});
