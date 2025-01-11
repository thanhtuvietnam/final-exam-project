import type { Meta, StoryObj } from '@storybook/react';

import { SideInfo } from '.';

const meta: Meta<typeof SideInfo> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SideInfo,
  tags: ['autodocs'],
  title: 'Atoms/SideInfo',
};

export default meta;

type Story = StoryObj<typeof SideInfo>;

export const Default: Story = {};
