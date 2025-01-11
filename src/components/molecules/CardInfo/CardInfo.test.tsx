import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { CardInfo } from '.';

describe('CardInfo', () => {
  test('renders CardInfo component', () => {
    render(<CardInfo />);
    const element = screen.getByText(/CardInfo/i);
    expect(element).toBeInTheDocument();
  });
});
