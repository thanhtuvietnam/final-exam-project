import type { Meta, StoryObj } from '@storybook/react';

import { BorderEffect } from '.';

const meta: Meta<typeof BorderEffect> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: BorderEffect,
  tags: ['autodocs'],
  title: 'Atoms/BorderEffect',
};

export default meta;

type Story = StoryObj<typeof BorderEffect>;

export const Default: Story = {};
