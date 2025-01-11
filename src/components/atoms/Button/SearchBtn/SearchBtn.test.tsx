import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SearchBtn } from '.';

describe('SearchBtn', () => {
  test('renders SearchBtn component', () => {
    render(<SearchBtn />);
    const element = screen.getByText(/SearchBtn/i);
    expect(element).toBeInTheDocument();
  });
});
