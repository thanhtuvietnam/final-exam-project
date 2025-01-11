import type { Meta, StoryObj } from '@storybook/react';

import { SidebarContent } from '.';

const meta: Meta<typeof SidebarContent> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SidebarContent,
  tags: ['autodocs'],
  title: 'Atoms/SidebarContent',
};

export default meta;

type Story = StoryObj<typeof SidebarContent>;

export const Default: Story = {};
