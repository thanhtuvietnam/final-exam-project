import type { Meta, StoryObj } from '@storybook/react';

import { SecondSlider } from '.';

const meta: Meta<typeof SecondSlider> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SecondSlider,
  tags: ['autodocs'],
  title: 'Molecules/SecondSlider',
};

export default meta;

type Story = StoryObj<typeof SecondSlider>;

export const Default: Story = {};
