import type { Meta, StoryObj } from '@storybook/react';

import { LoginBtn } from '.';

const meta: Meta<typeof LoginBtn> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: LoginBtn,
  tags: ['autodocs'],
  title: 'Atoms/LoginBtn',
};

export default meta;

type Story = StoryObj<typeof LoginBtn>;

export const Default: Story = {};
