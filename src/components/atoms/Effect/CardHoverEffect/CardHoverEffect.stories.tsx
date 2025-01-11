import type { Meta, StoryObj } from '@storybook/react';

import { CardHoverEffect } from '.';

const meta: Meta<typeof CardHoverEffect> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: CardHoverEffect,
  tags: ['autodocs'],
  title: 'Atoms/CardHoverEffect',
};

export default meta;

type Story = StoryObj<typeof CardHoverEffect>;

export const Default: Story = {};
