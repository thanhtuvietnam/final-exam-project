import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Slider,
  tags: ['autodocs'],
  title: 'Molecules/Slider',
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {};
