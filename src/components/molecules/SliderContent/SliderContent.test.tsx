import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { SliderContent } from '.';

describe('SliderContent', () => {
  test('renders SliderContent component', () => {
    render(<SliderContent />);
    const element = screen.getByText(/SliderContent/i);
    expect(element).toBeInTheDocument();
  });
});
