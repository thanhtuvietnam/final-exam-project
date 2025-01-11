import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { ContentBlock } from '.';

describe('ContentBlock', () => {
  test('renders ContentBlock component', () => {
    render(<ContentBlock />);
    const element = screen.getByText(/ContentBlock/i);
    expect(element).toBeInTheDocument();
  });
});
