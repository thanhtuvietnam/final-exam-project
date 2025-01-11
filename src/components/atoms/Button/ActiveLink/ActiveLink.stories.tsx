import type { Meta, StoryObj } from '@storybook/react';

import { ActiveLink } from '.';

const meta: Meta<typeof ActiveLink> = {
  title: 'Atoms/ActiveLink',
  component: ActiveLink,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof ActiveLink>;

export const Default: Story = {};
