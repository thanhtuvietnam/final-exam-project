import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

const meta: Meta<typeof Header> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Header,
  tags: ['autodocs'],
  title: 'Organisms/Header',
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
