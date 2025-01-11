import type { Meta, StoryObj } from '@storybook/react';

import { ProfileSubmenu } from '.';

const meta: Meta<typeof ProfileSubmenu> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: ProfileSubmenu,
  tags: ['autodocs'],
  title: 'Atoms/ProfileSubmenu',
};

export default meta;

type Story = StoryObj<typeof ProfileSubmenu>;

export const Default: Story = {};
