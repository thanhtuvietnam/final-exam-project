import type { Meta, StoryObj } from '@storybook/react';

import { MiniSliderBlock } from '.';

const meta: Meta<typeof MiniSliderBlock> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: MiniSliderBlock,
  tags: ['autodocs'],
  title: 'Atoms/MiniSliderBlock',
};

export default meta;

type Story = StoryObj<typeof MiniSliderBlock>;

export const Default: Story = {};
