import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from '.';

const meta: Meta<typeof Carousel> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Carousel,
  tags: ['autodocs'],
  title: 'Organisms/Carousel',
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {};
