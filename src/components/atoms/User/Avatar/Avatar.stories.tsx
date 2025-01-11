import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Avatar,
  tags: ['autodocs'],
  title: 'Atoms/Avatar',
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
