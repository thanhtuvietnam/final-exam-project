import type { Meta, StoryObj } from '@storybook/react';

import { MoviesTemplate } from '.';

const meta: Meta<typeof MoviesTemplate> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: MoviesTemplate,
  tags: ['autodocs'],
  title: 'Templates/MoviesTemplate',
};

export default meta;

type Story = StoryObj<typeof MoviesTemplate>;

export const Default: Story = {};
