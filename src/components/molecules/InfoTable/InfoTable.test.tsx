import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { InfoTable } from '.';

describe('InfoTable', () => {
  test('renders InfoTable component', () => {
    render(<InfoTable />);
    const element = screen.getByText(/InfoTable/i);
    expect(element).toBeInTheDocument();
  });
});
