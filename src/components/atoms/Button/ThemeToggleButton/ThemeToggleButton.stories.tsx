import type { Meta, StoryObj } from '@storybook/react';

import { ThemeToggleButton } from '.';

const meta: Meta<typeof ThemeToggleButton> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: ThemeToggleButton,
  parameters: {
    handles: ['click'],
  },
  tags: ['autodocs'],
  title: 'Atoms/ThemeToggleButton',
};

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;

export const Default: Story = {};
