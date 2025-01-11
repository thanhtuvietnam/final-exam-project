import { render, screen } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { UserSetting } from '.';

describe('UserSetting', () => {
  test('renders UserSetting component', () => {
    render(<UserSetting />);
    const element = screen.getByText(/UserSetting/i);
    expect(element).toBeInTheDocument();
  });
});
