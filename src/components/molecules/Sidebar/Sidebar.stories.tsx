import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '.';

const meta: Meta<typeof Sidebar> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Sidebar,
  tags: ['autodocs'],
  title: 'Molecules/Sidebar',
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
