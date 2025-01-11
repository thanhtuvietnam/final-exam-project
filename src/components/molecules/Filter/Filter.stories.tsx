import type { Meta, StoryObj } from '@storybook/react';

import { Filter } from '.';

const meta: Meta<typeof Filter> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Filter,
  tags: ['autodocs'],
  title: 'Molecules/Filter',
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {};
