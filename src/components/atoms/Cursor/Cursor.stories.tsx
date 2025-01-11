import type { Meta, StoryObj } from '@storybook/react';

import { Cursor } from '.';

const meta: Meta<typeof Cursor> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Cursor,
  tags: ['autodocs'],
  title: 'Atoms/Cursor',
};

export default meta;

type Story = StoryObj<typeof Cursor>;

export const Default: Story = {};
