import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '.';

const meta: Meta<typeof Logo> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Logo,
  tags: ['autodocs'],
  title: 'Molecules/Logo',
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
