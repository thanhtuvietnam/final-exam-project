import type { Meta, StoryObj } from '@storybook/react';

import { BackgroundGradient } from '.';

const meta: Meta<typeof BackgroundGradient> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: BackgroundGradient,
  tags: ['autodocs'],
  title: 'Atoms/BackgroundGradient',
};

export default meta;

type Story = StoryObj<typeof BackgroundGradient>;

export const Default: Story = {};
