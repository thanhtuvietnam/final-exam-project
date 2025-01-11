import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Slider } from '.';

describe('Slider', () => {
  test('renders Slider component', () => {
    render(<Slider />);
    const element = screen.getByText(/Slider/i);
    expect(element).toBeInTheDocument();
  });
});
