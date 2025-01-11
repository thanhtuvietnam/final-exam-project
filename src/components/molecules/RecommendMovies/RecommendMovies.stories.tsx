import type { Meta, StoryObj } from '@storybook/react';

import { RecommendMovies } from '.';

const meta: Meta<typeof RecommendMovies> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: RecommendMovies,
  tags: ['autodocs'],
  title: 'Molecules/RecommendMovies',
};

export default meta;

type Story = StoryObj<typeof RecommendMovies>;

export const Default: Story = {};
