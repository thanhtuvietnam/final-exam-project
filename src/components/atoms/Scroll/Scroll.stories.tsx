import type { Meta, StoryObj } from '@storybook/react';

import { Scroll } from '.';

const meta: Meta<typeof Scroll> = {
  title: 'Atoms/Scroll',
  component: Scroll,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Scroll>;

export const Default: Story = {};
