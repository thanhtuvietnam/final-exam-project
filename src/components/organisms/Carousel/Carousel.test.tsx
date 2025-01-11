import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { Carousel } from '.';

describe('Carousel', () => {
  test('renders Carousel component', () => {
    render(<Carousel />);
    const element = screen.getByText(/Carousel/i);
    expect(element).toBeInTheDocument();
  });
});
