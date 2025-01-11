import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { MainTemplate } from '.';

describe('MainTemplate', () => {
  test('renders MainTemplate component', () => {
    render(<MainTemplate>Test Children</MainTemplate>);
    const element = screen.getByText(/Test Children/i);
    expect(element).toBeInTheDocument();
  });
});
