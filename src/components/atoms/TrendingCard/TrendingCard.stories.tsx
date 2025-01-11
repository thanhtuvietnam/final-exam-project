import type { Meta, StoryObj } from '@storybook/react';

import { TrendingCard } from '.';

const meta: Meta<typeof TrendingCard> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: TrendingCard,
  tags: ['autodocs'],
  title: 'Atoms/TrendingCard',
};

export default meta;

type Story = StoryObj<typeof TrendingCard>;

export const Default: Story = {};
