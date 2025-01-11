import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { InputField } from '.';

describe('InputField', () => {
  test('renders InputField component', () => {
    render(<InputField />);
    const element = screen.getByText(/InputField/i);
    expect(element).toBeInTheDocument();
  });
});
