import type { Meta, StoryObj } from '@storybook/react';

import { BookMark } from '.';

const meta: Meta<typeof BookMark> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: BookMark,
  tags: ['autodocs'],
  title: 'Atoms/BookMark',
};

export default meta;

type Story = StoryObj<typeof BookMark>;

export const Default: Story = {};
