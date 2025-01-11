import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SecondSlider } from '.';

describe('SecondSlider', () => {
  test('renders SecondSlider component', () => {
    render(<SecondSlider />);
    const element = screen.getByText(/SecondSlider/i);
    expect(element).toBeInTheDocument();
  });
});
