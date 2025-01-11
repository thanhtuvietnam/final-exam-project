import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { XemPhimTemplate } from '.';

describe('XemPhimTemplate', () => {
  test('renders XemPhimTemplate component', () => {
    render(<XemPhimTemplate />);
    const element = screen.getByText(/XemPhimTemplate/i);
    expect(element).toBeInTheDocument();
  });
});
