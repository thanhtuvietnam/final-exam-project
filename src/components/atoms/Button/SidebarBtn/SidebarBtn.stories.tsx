import type { Meta, StoryObj } from '@storybook/react';

import { SidebarBtn } from '.';

const meta: Meta<typeof SidebarBtn> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SidebarBtn,
  tags: ['autodocs'],
  title: 'Atoms/SidebarBtn',
};

export default meta;

type Story = StoryObj<typeof SidebarBtn>;

export const Default: Story = {};
