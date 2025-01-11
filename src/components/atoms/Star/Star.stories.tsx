import type { Meta, StoryObj } from '@storybook/react';

import { Star } from '.';

const meta: Meta<typeof Star> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Star,
  tags: ['autodocs'],
  title: 'Atoms/Star',
};

export default meta;

type Story = StoryObj<typeof Star>;

export const Default: Story = {};
