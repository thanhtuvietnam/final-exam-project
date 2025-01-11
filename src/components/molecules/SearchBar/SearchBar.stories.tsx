import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from '.';

const meta: Meta<typeof SearchBar> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SearchBar,
  tags: ['autodocs'],
  title: 'Molecules/SearchBar',
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};
