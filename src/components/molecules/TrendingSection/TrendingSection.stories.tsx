import type { Meta, StoryObj } from '@storybook/react';

import { TrendingSection } from '.';

const meta: Meta<typeof TrendingSection> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: TrendingSection,
  tags: ['autodocs'],
  title: 'Molecules/TrendingSection',
};

export default meta;

type Story = StoryObj<typeof TrendingSection>;

export const Default: Story = {};
