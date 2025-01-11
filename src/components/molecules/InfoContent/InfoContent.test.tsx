import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { InfoContent } from '.';

describe('InfoContent', () => {
  test('renders InfoContent component', () => {
    render(<InfoContent />);
    const element = screen.getByText(/InfoContent/i);
    expect(element).toBeInTheDocument();
  });
});
