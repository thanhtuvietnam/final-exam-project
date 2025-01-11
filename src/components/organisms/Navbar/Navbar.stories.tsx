import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '.';

const meta: Meta<typeof Navbar> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Navbar,
  tags: ['autodocs'],
  title: 'Organisms/Navbar',
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
