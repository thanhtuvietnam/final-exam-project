import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '.';

const meta: Meta<typeof Tabs> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Tabs,
  tags: ['autodocs'],
  title: 'Atoms/Tabs',
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};
