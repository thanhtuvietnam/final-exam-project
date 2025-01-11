import type { Meta, StoryObj } from '@storybook/react';

import { TabLists } from '.';

const meta: Meta<typeof TabLists> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: TabLists,
  tags: ['autodocs'],
  title: 'Molecules/TabLists',
};

export default meta;

type Story = StoryObj<typeof TabLists>;

export const Default: Story = {};
