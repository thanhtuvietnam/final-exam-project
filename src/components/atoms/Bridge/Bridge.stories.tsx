import type { Meta, StoryObj } from '@storybook/react';

import { Bridge } from '.';

const meta: Meta<typeof Bridge> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Bridge,
  tags: ['autodocs'],
  title: 'Atoms/Bridge',
};

export default meta;

type Story = StoryObj<typeof Bridge>;

export const Default: Story = {};
