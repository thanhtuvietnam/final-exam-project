import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
