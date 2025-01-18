import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { VidStackPlayer } from '.';

describe('VidStackPlayer', () => {
  test('renders VidStackPlayer component', () => {
    render(<VidStackPlayer />);
    const element = screen.getByText(/VidStackPlayer/i);
    expect(element).toBeInTheDocument();
  });
});
