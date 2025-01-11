import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { BlockInfoSection } from '.';

describe('BlockInfoSection', () => {
  test('renders BlockInfoSection component', () => {
    render(<BlockInfoSection />);
    const element = screen.getByText(/BlockInfoSection/i);
    expect(element).toBeInTheDocument();
  });
});
