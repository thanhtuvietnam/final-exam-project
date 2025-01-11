import type { Meta, StoryObj } from '@storybook/react';

import { SearchBtn } from '.';

const meta: Meta<typeof SearchBtn> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SearchBtn,
  tags: ['autodocs'],
  title: 'Atoms/SearchBtn',
};

export default meta;

type Story = StoryObj<typeof SearchBtn>;

export const Default: Story = {};
