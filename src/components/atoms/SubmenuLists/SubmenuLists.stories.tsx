import type { Meta, StoryObj } from '@storybook/react';

import { SubmenuLists } from '.';

const meta: Meta<typeof SubmenuLists> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SubmenuLists,
  tags: ['autodocs'],
  title: 'Atoms/SubmenuLists',
};

export default meta;

type Story = StoryObj<typeof SubmenuLists>;

export const Default: Story = {};
