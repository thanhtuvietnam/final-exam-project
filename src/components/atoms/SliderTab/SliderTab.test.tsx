import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SliderTab } from '.';

describe('SliderTab', () => {
  test('renders SliderTab component', () => {
    render(<SliderTab />);
    const element = screen.getByText(/SliderTab/i);
    expect(element).toBeInTheDocument();
  });
});
