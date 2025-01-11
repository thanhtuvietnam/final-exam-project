import type { Meta, StoryObj } from '@storybook/react';

import { UserLogin } from '.';

const meta: Meta<typeof UserLogin> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: UserLogin,
  tags: ['autodocs'],
  title: 'Molecules/UserLogin',
};

export default meta;

type Story = StoryObj<typeof UserLogin>;

export const Default: Story = {};
