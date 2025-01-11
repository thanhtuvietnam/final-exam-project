import { render, screen, fireEvent } from '@/tests/test-utils';
import '@testing-library/jest-dom';

import { ThemeToggleButton } from '.';

describe('ThemeToggleButton', () => {
  test('renders ThemeToggleButton component', () => {
    render(<ThemeToggleButton />);
    const element = screen.getByRole('button', {
      name: /toggleTheme/i,
    });
    expect(element).toBeInTheDocument();
  });

  test('initially sets theme to dark', () => {
    render(<ThemeToggleButton />);
    const htmlElement = document.documentElement;
    expect(htmlElement.classList.contains('dark')).toBe(true);
  });

  test('toggles theme from dark to light', () => {
    render(<ThemeToggleButton />);
    const buttonElement = screen.getByRole('button', {
      name: /toggleTheme/i,
    });
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    fireEvent.click(buttonElement);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
