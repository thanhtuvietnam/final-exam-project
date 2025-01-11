import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { MiniSliderBlock } from '.';

describe('MiniSliderBlock', () => {
  test('renders MiniSliderBlock component', () => {
    render(<MiniSliderBlock />);
    const element = screen.getByText(/MiniSliderBlock/i);
    expect(element).toBeInTheDocument();
  });
});
