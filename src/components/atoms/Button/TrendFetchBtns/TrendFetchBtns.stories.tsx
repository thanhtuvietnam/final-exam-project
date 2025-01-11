import type { Meta, StoryObj } from '@storybook/react';

import { TrendFetchBtns } from '.';

const meta: Meta<typeof TrendFetchBtns> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: TrendFetchBtns,
  tags: ['autodocs'],
  title: 'Atoms/TrendFetchBtns',
};

export default meta;

type Story = StoryObj<typeof TrendFetchBtns>;

export const Default: Story = {};
