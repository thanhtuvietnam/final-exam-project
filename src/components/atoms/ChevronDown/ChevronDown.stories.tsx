import type { Meta, StoryObj } from '@storybook/react';

import { ChevronDown } from '.';

const meta: Meta<typeof ChevronDown> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: ChevronDown,
  tags: ['autodocs'],
  title: 'Atoms/ChevronDown',
};

export default meta;

type Story = StoryObj<typeof ChevronDown>;

export const Default: Story = {};
