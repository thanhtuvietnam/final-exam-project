import type { Meta, StoryObj } from '@storybook/react';

import { TextEffect } from '.';

const meta: Meta<typeof TextEffect> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: TextEffect,
  tags: ['autodocs'],
  title: 'Atoms/TextEffect',
};

export default meta;

type Story = StoryObj<typeof TextEffect>;

export const Default: Story = {};
